const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const shopSchema = require('../../Schemas.js/shopSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('equip').setDescription("Equip a fishing rod").addStringOption(option =>
		option.setName('item')
			.setDescription('Item to equip')
			.setRequired(true)),
  async execute(interaction) {
    const user = await UserSchema.findOne({UserId:interaction.user.id});
    
    const k1 = interaction.options.getString('item');
let item10;
let item1;
    if(user){
        const lsit = await shopSchema.find();
        user.Inventory.forEach((row =>{
            if(row.Item==k1)item10=row;
           }))
           lsit.forEach((row =>{
            if(row.name==k1)item1=row;

           }))
            

           if(item10&&item1&&item1.typeI=='rod'){
            if(user.Rod.name=='-'){
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, {$set:{"Rod.name":item1.name,"Rod.durability":item1.durability,"Rod.desc":item1.desc}});
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": item10.Item }, { $inc: { "Inventory.$.ItemQuantity": -(1) } });
                if ((item10.ItemQuantity - 1) == 0) await UserSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { Inventory: { Item: item10.Item } } });
               
                return interaction.reply({content: `You have equiped a `+item1.name});

            }
        else{
        return interaction.reply({content: `You already have a rod equipped`});
        }
           }
           else if(item10&&item1&&item1.typeI=='furnace'){
            if(user.Furnace.name=='-'){
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, {$set:{"Furnace.name":item1.name,"Furnace.cfuel":0,"Furnace.mfuel":10,"Furnace.desc":item1.desc}});
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": item10.Item }, { $inc: { "Inventory.$.ItemQuantity": -(1) } });
                if ((item10.ItemQuantity - 1) == 0) await UserSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { Inventory: { Item: item10.Item } } });
               
                return interaction.reply({content: `You have equiped a `+item1.name});

            }
        else{
        return interaction.reply({content: `You already have a furnace equipped`});
        }
           }
          else if(item10&&item1&&item1.typeI=='pickaxe'){
            if(user.Pick.name=='-'){
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, {$set:{"Pick.name":item1.name,"Pick.durability":item1.durability,"Pick.desc":item1.desc}});
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": item10.Item }, { $inc: { "Inventory.$.ItemQuantity": -(1) } });
                if ((item10.ItemQuantity - 1) == 0) await UserSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { Inventory: { Item: item10.Item } } });
               
                return interaction.reply({content: `You have equiped a `+item1.name});

            }
        else{
        return interaction.reply({content: `You already have a pickaxe equipped`});
        }
           }
           
           return interaction.reply({content: `Item not found/ item can not be equipped`});

    }
    else{
        return interaction.reply({content: 'Gnomesona not found'});

    }
  }}