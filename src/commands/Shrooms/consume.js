const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require ('../../validate');

module.exports = {
	data: new SlashCommandBuilder().setName('consume').setDescription("Consume an item from your inventory").addStringOption(option =>
		option.setName('item')
			.setDescription('Item to consume')
			.setRequired(true)),
  async execute(interaction) {
    const user = await UserSchema.findOne({UserId:interaction.user.id});
    const k1 = interaction.options.getString('item');
let item10;
let item1;
    if(user){
        let current = user.Bonus;
        const lsit = await pricesSchema.find();
        user.Inventory.forEach((row =>{
            if(row.Item==k1)item10=row;
           }))
           lsit.forEach((row =>{
            if(row.Name==k1)item1=row;
           }))
           if(item10&&item1&&item1.Consumable){
            current = item1.bonus;
            if(user.Bonus!=1000){
            if((current+user.Bonus)>=1000)current=1000-user.Bonus;
            await UserSchema.findOneAndUpdate({UserId:interaction.user.id,"Inventory.Item":k1},{$inc:{"Inventory.$.ItemQuantity":-1}});
            await UserSchema.updateMany({UserId:interaction.user.id},{$pull:{Inventory:{ItemQuantity:0}}})
            if(item1.Name!='Mycelium'){await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$inc:{"Bonus": (current)}})}
            else{
                await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"mice": true}})
            };
           if(!item1.Poisonous){
            if(user.Status!='Poisoned'||item1.Show=='Mix'){
            if(item1.bonus!=0){
                await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"Status": 'Hasty'}});

            }
            else{
                await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"Status": 'Good'}});

            }
        }
        
        }else{
            await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"Status": 'Poisoned'}});

        }
        return interaction.reply({content: 'Your skills have increased by '+current.toString()});

        }
        return interaction.reply({content: `You can't eat this right now`});

           }
           return interaction.reply({content: `Item not found/item not edible`});

    }
    else{
        return interaction.reply({content: 'Gnomesona not found'});

    }
  }}