const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
var urlV = require ('../../validate');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('create')
    .setDescription('Create your one and unique gnome-sona (you can only do this once)')
    .addStringOption(option => option.setName('name').setDescription('The name of your gnome-sona').setRequired(true))
    .addStringOption(option => option.setName('image').setDescription('Image for your gnome-sona')),
async execute (interaction){
    const opt = await UserSchema.findOne({UserId: interaction.user.id});
    
      //  if(){
        if(!opt&& (urlV.urlValid(interaction.options.getString('image'))||!interaction.options.getString('image'))){
            
            UserSchema.create({
                UserId: interaction.user.id,
                Gname: interaction.options.getString('name'),
Avatar: (interaction.options.getString('image') ?? 'https://cdn.discordapp.com/attachments/1097682794991341708/1097682823042830396/3f86e3b3daa18265b5a280030235496c43-26-mushroom-lede.rsquare.w700.webp'),
           Dabloons: 0,
           Status: 'Good',
           Bags :{
            name: 'Bags',
      amount: 1,
      desc: 'Each bag can carry a maximum of 10 items'
           },
Badges:{
    name: 'Shamrock badges',
    amount: 0,
    desc:'The more the merrier'
}

           
           
})
            

            return interaction.reply({content:'Your gnomesona ' + interaction.options.getString('name') +' has been created'});
        }
        if(opt) return interaction.reply({content:'You already have a gnomesona, do not use this command again.'});
   // }  
   return interaction.reply({content:'Use a valid url for your avatar'});
}
}
