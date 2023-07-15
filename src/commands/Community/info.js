const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('info').setDescription("Display your (or someone else's) gnome status"),
  async execute(interaction) {
   
const firstDate = new Date();
const secondDate = new Date("07/22/2023");
const client = interaction.client;
var time_difference = secondDate.getTime() - firstDate.getTime();  
  
         var days_difference = time_difference / (1000 * 60 * 60 * 24);  
         days_difference = Math.round(days_difference);
    const usr = new EmbedBuilder()
    .setTitle('Season info')
    .setColor('#0000FF')          
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        { name: 'Season 2: ', value: 'Big prize: Discord nitro for 1 month' },
        { name: 'How to win: ', value: 'The gnome with the most badges at the end of season wins; explore, fish or delve into the mines to obtain materials' },
{name: 'Days until the end of the season:', value: days_difference.toString()} 
    )
    await interaction.reply({ embeds: [usr] });

  }}