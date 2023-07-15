const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
.setName('test')
.setDescription('This is but a test command'),
async execute(interaction,client){
    await interaction.reply({content: 'The bot is working'});
}

}