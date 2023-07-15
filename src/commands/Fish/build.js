const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const shopSchema = require('../../Schemas.js/shopSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('build').setDescription("Build the stone furnace (6 stone required)"),
		
  async execute(interaction) {
    const user = await UserSchema.findOne({UserId:interaction.user.id});
    let rocks;
    let furnace;

    if(user){
        const lsit = await shopSchema.find();
        user.Inventory.forEach((row =>{
            if(row.Item=='Stone')rocks=row;
           }))
           lsit.forEach((row =>{
            if(row.name=='Stone furnace')furnace=row;

           }))
           
            if(rocks&&rocks.ItemQuantity>=6){
            if(user.Furnace.name=='-'){
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, {$set:{"Furnace.name":furnace.name,"Furnace.cfuel":0,"Furnace.mfuel":10,"Furnace.desc":furnace.desc}});
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": rocks.Item }, { $inc: { "Inventory.$.ItemQuantity": -(6) } });
                if ((rocks.ItemQuantity - 6) == 0) await UserSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { Inventory: { Item: rocks.Item } } });
               
                return interaction.reply({content: `You have built the `+furnace.name});

            }
           else {
            return interaction.reply({content: `You already have a furnace`});

            }
        
           }
          
           
           return interaction.reply({content: `You don't have enough stones (6 required)`});

    }
    else{
        return interaction.reply({content: 'Gnomesona not found'});

    }
  }}