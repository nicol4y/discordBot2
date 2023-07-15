const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const itemSchema = require('../../Schemas.js/shopSchema');

module.exports = {
    data: new SlashCommandBuilder().setName('buy').setDescription("Buy an item").addStringOption(option =>
        option.setName('item')
            .setDescription('Item to purchase')
            .setRequired(true)).addIntegerOption(option => option.setName('amount').setDescription('Quantity you desire to buy').setRequired(true)),
    async execute(interaction) {
        let test = await UserSchema.findOne({ UserId: interaction.user.id });
        let sun = await itemSchema.findOne({ name: interaction.options.getString('item') });
        let value = interaction.options.getInteger('amount');

        if (test) {
            if (sun && value > 0) {
                value = sun.Price * value;
                if (test.Dabloons >= value) {
                    if (sun.name == 'Shamrock badge') await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: {"Badges.amount": interaction.options.getInteger('amount') } });
                    else if (sun.name == 'Bag') await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: {"Bags.amount": interaction.options.getInteger('amount') } });
                    else {
                    if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": sun.name })) {

                        await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": sun.name }, { $inc: { "Inventory.$.ItemQuantity": interaction.options.getInteger('amount') } });
                    }
                    else {
                        await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": sun.name, "ItemQuantity": interaction.options.getInteger('amount'), "Desc": sun.desc, "Icon": sun.icon } } });
                    }
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Dabloons": -(value)} });

                }
                
                    return interaction.reply({ content: 'You have acquired '.concat(interaction.options.getInteger('amount'), ' ', sun.name, '(s)') });

                }
                else {
                    return interaction.reply({ content: 'You do not have enough dabloons' });

                }
            }
            else {
                return interaction.reply({ content: 'Item not found/you entered 0 as the amount to buy' });

            }
        }
        else {
            return interaction.reply({ content: 'Create your gnomesona with /create first' });

        }
    }
}