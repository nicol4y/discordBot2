const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');

module.exports = {
    data: new SlashCommandBuilder().setName('transfer').setDescription('Trade with a fellow gnome').addUserOption(option => option.setName('receiver').setDescription('Select a user').setRequired(true)).addIntegerOption(option => option.setName('amount').setDescription('The amount to transfer').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('receiver');
        const money = interaction.options.getInteger('amount');
        const receiver = await UserSchema.findOne({ UserId: user.id });
        const giver = await UserSchema.findOne({ UserId: interaction.user.id });
        if (receiver && giver) {
            if (giver.Dabloons >= money) {
                await UserSchema.findOneAndUpdate({ "UserId": user.id }, { $inc: { "Dabloons": (money) } });
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Dabloons": -(money) } });
                return interaction.reply({ content: 'You have transferred $'.concat(money.toString(), ' dabloons to <@', user.id, '>') });

            }
        }
    }
}