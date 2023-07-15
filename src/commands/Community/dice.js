const { SlashCommandBuilder} = require('discord.js');
var urlV = require ('../../validate');
module.exports = {
	data: new SlashCommandBuilder().setName('dice').setDescription("Throw a die").addIntegerOption(option => option.setName('number').setDescription('The result will be between 1 and this number').setRequired(true)),
  async execute(interaction) {
let x = urlV.getRandomInt(1,interaction.options.getInteger('number'));
return interaction.reply({content: 'You got a ' + x.toString()});}}