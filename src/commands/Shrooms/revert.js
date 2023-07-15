const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require ('../../validate');
var timeout = [];

module.exports = {
	data: new SlashCommandBuilder().setName('heal').setDescription("Heals poisoned status for 15 dabloons"),
  async execute(interaction) {
    const ss = await UserSchema.findOne({UserId: interaction.user.id});
if(ss){
    if(ss.Status=='Poisoned'){
        await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"Status": 'Good'}});
        await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$inc:{"Dabloons": -(15)}});

        return interaction.reply({content: 'Cured and good to go'});

    }
    return interaction.reply({content: 'Nothing to cure'});

}
return interaction.reply({content: `You don't even exist`});

  }}