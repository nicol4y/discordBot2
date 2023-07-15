const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('help').setDescription("Tips and rules"),
  async execute(interaction) {
    const user = interaction.user;
let txt = user.username +'#'+ user.discriminator;
    const leadEmb = new EmbedBuilder()
    .setTitle('Help')
    .setColor('#9cc5b6')          
	.setDescription('The basics')
    .addFields(
		{ name: 'Gnomes', value: 'In order to play you must create a gnomesona with /create, you can check on it with /status or update your avatar with /update' },
        { name: 'Shrooms', value: 'The forest is filled with shrooms!, explore the Mirkwood forest with /explore, every time you visit you will find a mushroom or two' },
        { name: 'Dabloons', value: 'Obtain dabloons by selling mushrooms with /sell, you can check how much each mushroom is worth with /mushrooms' },
        { name: 'Bags', value: 'You start with only one bag, each bag can hold up to 10 shrooms, you can buy more bags with /buybag' },
        { name: 'Shamrock badges', value: 'Buy shamrock badges with /buy, the gnome with most badges at the end of the season wins' },
       

    )

    .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
    return interaction.reply({embeds: [leadEmb]});

  }}