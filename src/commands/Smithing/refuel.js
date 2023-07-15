const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const shopSchema = require('../../Schemas.js/shopSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('refuel').setDescription("Refill your furnace").addIntegerOption(option => option.setName('amount').setDescription('Select an amount').setRequired(true)),
		
  async execute(interaction) {
    const user = await UserSchema.findOne({UserId:interaction.user.id});
    let k2 = interaction.options.getInteger('amount');

    let rocks;

    if(user){
        if(user.Furnace.name!='-'){
        user.Inventory.forEach((row =>{
            if(row.Item=='Charcoal chunk')rocks=row;
           }))

           
            if(rocks&&rocks.ItemQuantity>=k2&&(user.Furnace.cfuel+k2)<=user.Furnace.mfuel){
            
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Furnace.cfuel":k2}});
                await UserSchema.updateMany({UserId:interaction.user.id},{$pull:{Inventory:{ItemQuantity:0}}})

                return interaction.reply({content: `You have refilled your furnace with `+k2+' charges'});

           }
           return interaction.reply({content: `Safety hazard!, do not overload the furnace`});

        }
           return interaction.reply({content: `You don't have a furnace`});

    }
    else{
        return interaction.reply({content: 'Gnomesona not found'});

    }
  }}