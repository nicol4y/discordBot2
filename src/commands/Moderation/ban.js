const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');

module.exports = {
	data:  new SlashCommandBuilder().setName('ban').setDescription('Obliterate a fellow gnome').addUserOption(option => option.setName('target').setDescription('Select a user').setRequired(true)).addStringOption(option => option.setName('reason').setDescription('Enter reason (it does not have to be good)')),
  async execute(interaction) {
     const member = interaction.member ;
        
          const reas = interaction.options.getString('reason');
   if (member.permissions.has(PermissionsBitField.Flags.BanMembers)){
    var how2 = 'You have been banned from ' + interaction.guild.name;
        const member = interaction.options.getMember('target');
     if(reas){
        const bansito = new EmbedBuilder()
        .setTitle(how2)
        .addFields(
            { name: "Reason", value: reas })
      
        .setColor('#dc143c')
       .setTimestamp()
       try{
       member.send({embeds:[bansito]});
       }
       catch(err){
         console.log('blocked dms');
       }
       setTimeout(function(){ 
   member.ban({ days: 7, reason: reas })
}, 3000);
        
       

var coco = member.user.username + " is no longer welcome in gnome lands"
       
       
        const banembed = new EmbedBuilder()
        .setTitle(coco)
        .setThumbnail(member.avatarURL())
        .addFields(
            { name: "Gnome dogtag: ", value: member.user.tag },
            { name: 'Smited by: ', value: interaction.user.username },
            { name: 'Reason:', value: reas },
        
        )
    
       
        .setFooter({text:`Time of the incident `,iconURL: member.avatarURL()})
          .setColor('#dc143c')
        .setTimestamp()

      return interaction.reply({embeds:[banembed]});
     }
     else{
       member.ban();
     }
        
   }
        else{
          return interaction.reply(`You are not yet part of the higher council, just a fool for the time being`);}
  },
};
