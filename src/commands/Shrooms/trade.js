const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');

module.exports = {
    data: new SlashCommandBuilder().setName('trade').setDescription('Trade with a fellow gnome').addUserOption(option => option.setName('target').setDescription('Select a user').setRequired(true)).addStringOption(option => option.setName('give').setDescription('Enter the item and amount you want to give (item/quantity)').setRequired(true)).addStringOption(option => option.setName('receive').setDescription('Enter the item and amount you want to receive (item/quantity)').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const receiver = await UserSchema.findOne({ UserId: user.id });
        const giver = await UserSchema.findOne({ UserId: interaction.user.id });
        if (receiver && giver) {
            let Fitem = interaction.options.getString('give').split(`/`);
            let Sitem = interaction.options.getString('receive').split(`/`);
            let Fquantity = parseInt(Fitem[1]);
            let Squantity = parseInt(Sitem[1]);
            let Fcheck;
            let Scheck;

            const confirm = new ButtonBuilder()
                .setCustomId('confirm')
                .setLabel('Accept')
                .setStyle(ButtonStyle.Success);

            const cancel = new ButtonBuilder()
                .setCustomId('reject')
                .setLabel('Reject')
                .setStyle(ButtonStyle.Danger);

            const row = new ActionRowBuilder()
                .addComponents(cancel, confirm);
            if ((typeof (Fquantity) && typeof (Squantity)) == 'number') {
                giver.Inventory.forEach((row => {
                    if (row.Item == (Fitem[0]) && (row.ItemQuantity >= Fquantity)) Fcheck = row;
                }))
                receiver.Inventory.forEach((row => {
                    if (row.Item == (Sitem[0]) && (row.ItemQuantity >= Squantity)) Scheck = row;
                }))
                if (Fcheck && Scheck) {

                    const response = await interaction.reply({
                        content: `Hey <@`.concat(user.id, '>,', '<@', interaction.user.id, '> wants to trade their ', Fitem[1], ' ', Fitem[0], '(s) for ', Sitem[1], ' of your ', Sitem[0], '(s)'),
                        components: [row],
                    });
                    const collectorFilter = i => i.user.id === user.id;
                    try {

                        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });

                        if (confirmation.customId === 'confirm') {

                            await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": Fcheck.Item }, { $inc: { "Inventory.$.ItemQuantity": -Fquantity } });
                            await UserSchema.findOneAndUpdate({ UserId: user.id, "Inventory.Item": Scheck.Item }, { $inc: { "Inventory.$.ItemQuantity": -Squantity } });
                            await UserSchema.updateMany({ UserId: interaction.user.id }, { $pull: { Inventory: { ItemQuantity: 0 } } });
                            await UserSchema.updateMany({ UserId: user.id }, { $pull: { Inventory: { ItemQuantity: 0 } } });

                            //first user fill
                            if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": Scheck.Item })) {
                                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": Scheck.Item }, { $inc: { "Inventory.$.ItemQuantity": Squantity } });
                            }
                            else {
                                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": Scheck.Item, "ItemQuantity": Squantity, "Desc": Scheck.Desc, "Icon": Scheck.Icon } } });
                            }
                            //second user fill
                            if (await UserSchema.findOne({ UserId: user.id, "Inventory.Item": Fcheck.Item })) {
                                await UserSchema.findOneAndUpdate({ UserId: user.id, "Inventory.Item": Fcheck.Item }, { $inc: { "Inventory.$.ItemQuantity": Fquantity } });
                            }
                            else {
                                await UserSchema.findOneAndUpdate({ "UserId": user.id }, { $push: { "Inventory": { "Item": Fcheck.Item, "ItemQuantity": Fquantity, "Desc": Fcheck.Desc, "Icon": Fcheck.Icon } } });
                            }
                            await confirmation.update({ content: `Trade succesfully completed`, components: [] });
                        } else if (confirmation.customId === 'reject') {
                            await confirmation.update({ content: 'This trade was cancelled', components: [] });
                        }
                    } catch (e) {
                        await response.edit({ content: 'Confirmation not received within 1 minute', components: [] });
                    }


                }
                else {
                    //items not found in their invs/ not enough items
                    return interaction.reply({ content: 'Item(s) not found/not enough items' });

                }

            }
            else {
                //not a number
                return interaction.reply({ content: 'Not a number' });

            }
        } else {
            return interaction.reply({ content: 'User does not exist' });

        }
    }
}