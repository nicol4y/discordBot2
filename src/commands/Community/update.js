const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField, Attachment } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
var urlV = require ('../../validate');


module.exports = {
	data: new SlashCommandBuilder().setName('update').setDescription("Update you avatar").addStringOption(option => option.setName('new').setDescription('Link for your new image').setRequired(true)),
  async execute(interaction) {
   if(urlV.urlValid(interaction.options.getString('new'))){
await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"Avatar": interaction.options.getString('new')}});

return interaction.reply({content:'Your avatar has been updated to ', files:[{attachment: interaction.options.getString('new')}]});

  }
  return interaction.reply({content:'Use a valid url next time'});
  }
}