const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('patch').setDescription("Read the latest patch notes"),
  async execute(interaction) {
    const user = interaction.user;
let txt = user.username +'#'+ user.discriminator;
    const leadEmb = new EmbedBuilder()
    .setTitle('Patch 2.0')
    .setColor('#9cc5b6')          
	.setDescription('Smithing')
    .addFields(
		{ name: '/smith', value: 'Check this command to see what you can create with minerals and/or materials' },
        { name: '/craft', value: 'You can fuse materials with craft, syntax: Item1,Item2' },
        { name: 'Charcoal chunks', value: 'Crafted by mixing two Charcoal burners, required in order to refuel the furnace' },

       

    )

    .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
    return interaction.reply({embeds: [leadEmb]});

  }}