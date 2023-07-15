const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('helpcook').setDescription("Tips for cooking"),
  async execute(interaction) {
    const user = interaction.user;
let txt = user.username +'#'+ user.discriminator;
    const leadEmb = new EmbedBuilder()
    .setTitle('Cooking guide')
    .setColor('#6897bb')          
	.setDescription('Tips and mostly tricks')
    .addFields(
		{ name: 'Shrooms', value: 'Mix two mushrooms to create an special dish!' },
        { name: 'Order', value: 'Order matters, try different combinations to discover new recipes' },
        { name: 'Sell', value: `Food tends to sell better than plain mushrooms, sometimes it won't tho` },
        { name: 'Bags', value: 'Bag rules apply to whatever you cook' },
        { name: 'Missmatches', value: 'Mixing poisonous and edible mushrooms will result in a failure (or maybe not)' },
        { name: 'Recipes', value: 'Recipes are a secret, remember them or write them down with /note' }


    )

    .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
    return interaction.reply({embeds: [leadEmb]});

  }}