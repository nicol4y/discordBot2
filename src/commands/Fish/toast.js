const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require ('../../validate');

module.exports = {
	data: new SlashCommandBuilder().setName('toast').setDescription("Toast an item from your inventory").addStringOption(option =>
		option.setName('item')
			.setDescription('Item to toast')
			.setRequired(true)).addIntegerOption(option => option.setName('amount').setDescription('Select an amount').setRequired(true)),
  async execute(interaction) {
    const user = await UserSchema.findOne({UserId:interaction.user.id});
    let k1 = interaction.options.getString('item').split(",");
    let k2 = interaction.options.getInteger('amount');

let item10;
let item1;
    if(user){
        if(user.Furnace.name=='-')return interaction.reply({content: `You do not have a furnace`});
        const lsit = await pricesSchema.find();
        user.Inventory.forEach((row =>{
            if(row.Item==interaction.options.getString('item'))item10=row;
           }))
           lsit.forEach((row =>{
            if(row.Name==k1[0])item1=row;
           }))
           if(item10&&item1&&(item1.Show=='Mushroom'||item1.Show=='Fish')){
            if(k1[1]!='Toasted'&&k1[2]!='Toasted'){
                if(k2<=item10.ItemQuantity){
                    if(user.Furnace.cfuel>=k2){
            await UserSchema.findOneAndUpdate({UserId:interaction.user.id,"Inventory.Item":item10.Item},{$inc:{"Inventory.$.ItemQuantity":-k2,"Furnace.cfuel":-k2}});
            if((item10.ItemQuantity-k2)==0) await UserSchema.findOneAndUpdate({UserId:interaction.user.id},{$pull:{Inventory:{Item:item10.Item}}});
            if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": item10.Item.concat(',Toasted') })) {
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": item10.Item.concat(',Toasted') }, { $inc: { "Inventory.$.ItemQuantity": k2 } });
            }
            else {
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": item10.Item.concat(',Toasted'), "ItemQuantity": k2, "Desc": item1.Desc+', This item has been toasted', "Icon": item1.Icon } } });
            }
        return interaction.reply({content: 'You have toasted a '+item10.Item});
    }
    return interaction.reply({content: `Your furnace does not have enough fuel`});

}
    return interaction.reply({content: `Not enough items`});

        }
        return interaction.reply({content: `This item is already toasted`});

           }
           return interaction.reply({content: `Item not found/item not edible`});

    }
    else{
        return interaction.reply({content: 'Gnomesona not found'});

    }
  }}