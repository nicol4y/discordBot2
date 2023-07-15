const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('avatar').setDescription("Display user's avatar").addUserOption(option => option.setName('target').setDescription('Select a user')),
  async execute(interaction) {
     const user = interaction.options.getUser('target') ?? interaction.user;
     let flag = interaction.options.getUser('target');
     let txt = user.username +'#'+ user.discriminator;
    if (flag) {
        
        let txt = interaction.user.username +'#'+ interaction.user.discriminator;
    
   
      var coco = user.tag + "'s Avatar"
       const usr = new EmbedBuilder()
        .setTitle(coco)
        .setColor('#fc1620')
       
      .setImage(user.displayAvatarURL({size: 2048}))
      .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
       await interaction.reply({ embeds: [usr] });
     }
    else{
      
      var coco = interaction.user.tag + "'s Avatar"
  
  
        const usr = new EmbedBuilder()
        .setTitle(coco)
        .setColor('#fc1620')          
        
        .setImage(user.displayAvatarURL({size: 2048}))
        .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
      
      await interaction.reply({ embeds: [usr] });
    }
  },
};