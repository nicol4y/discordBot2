const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Display your inventory')
        .addUserOption(option => option.setName('target').setDescription('Select a user (optional)')),
    async execute(interaction) {
        let coll = [];
        let frog = 1;
        let current = 0;
        const user = interaction.options.getUser('target') ?? interaction.user;
        let gname = '';
        const opt = await UserSchema.findOne({ UserId: user.id });
        if (opt) {
            gname = opt.Gname;
            let name = `'s inventory`
            if (opt.Gname[opt.Gname.length - 1] == 's') name = `' inventory`;
            let inventoryEmb = new EmbedBuilder()
                .setTitle(gname + name)
                .setColor('#fc1620')
                .addFields({ name: opt.Bags.name.concat(' <:bag:1105318590275653692>',' X', opt.Bags.amount.toString()), value: opt.Bags.desc })
                .setFooter({ text: `Requested by ` + interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
            const button = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("prev")
                        .setEmoji("<:gnomeL:1104664337286701066>")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId("next")
                        .setEmoji("<:gnomeR:1104664413023260792>")
                        .setStyle(ButtonStyle.Primary),
                )
            let g = false;
            opt.Inventory.forEach((row) => {
                frog++;

                if (row.Icon) {
                    inventoryEmb.addFields({ name: row.Item + row.Icon + ' x'.concat(row.ItemQuantity.toString()), value: row.Desc })
                    g =true;
                }
                else {
                    inventoryEmb.addFields({ name: row.Item + ' x'.concat(row.ItemQuantity.toString()), value: row.Desc })
                    g=true;
                }
                if ((frog % 4) == 0) {
                    g=false;

                    coll.push(inventoryEmb);
                    inventoryEmb = new EmbedBuilder()
                        .setTitle(gname + name)
                        .setColor('#fc1620')
                        .setFooter({ text: `Requested by ` + interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                }
            })

            if (4 >= frog) return interaction.reply({ embeds: [inventoryEmb] });
            if(g==true)                 coll.push(inventoryEmb);
            
            const message = await interaction.reply({ embeds: [coll[0]], components: [button] });
            const collectorFilter = i => i.user.id === interaction.user.id;
            const collector = await message.createMessageComponentCollector({ filter: collectorFilter, time: 60000 });
            try {

                collector.on('collect', async i => {
                    if (i.customId == 'prev') {

                        if (current == 0) {
                            await i.update({ embeds: [coll[coll.length - 1]], components: [button] });
                            current = coll.length - 1;
                        }
                        else {
                            await i.update({ embeds: [coll[current - 1]], components: [button] });
                            current--;
                        }
                    }
                    if (i.customId == 'next') {

                        if ((current + 1) == coll.length) {
                            await i.update({ embeds: [coll[0]], components: [button] });
                            current = 0;
                        }
                        else {
                            await i.update({ embeds: [coll[current + 1]], components: [button] });
                            current++;
                        }
                    }

                })

            }
            catch (e) {
            }

        }
        if (!user) return interaction.reply({ content: 'This user does not have a gnomesona' });;

    }
}