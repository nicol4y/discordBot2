const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
.setName('addsticker')
.setDescription('Add a sticker')
.addAttachmentOption(option => option.setName('sticker').setDescription('Upload a new sticker as png/jpg').setRequired(true))
.addStringOption(option => option.setName('name').setDescription('The name of the sticker').setRequired(true)),
async execute(interaction,client){
    return interaction.reply({ content: `This command is deprecated` });

}

}