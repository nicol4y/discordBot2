const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require('../../validate');
var timeout = [];

module.exports = {
    data: new SlashCommandBuilder().setName('fish').setDescription("Fish in the nearest pond"),
    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Let the fish rest, 20 minutes between attempts`, ephemeral: true });
        let fr = 1000;
        const ss = await UserSchema.findOne({ UserId: interaction.user.id });

        if (ss) {
            if(ss.Rod.name!='-'){
            let time = 1200000;
            let rndm = urlV.getRandomInt(fr, 1420);
            let xtra = urlV.getRandomInt(1,3);
            let numbrs = await pricesSchema.find();
            let sizes = [' ','Small','Medium','Big'];
            let x;
            let flag = true;
            let lifesaver;
//            await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $set: { "Bonus": 0 } });
            if (ss.Status == 'Poisoned') time = time * 1.5;
            let fishes = [];
numbrs.forEach((row)=>{
if(row.Show=='Fish')fishes.push(row);
})
            fishes.sort((a, b) => a.MushId - b.MushId);
            fishes = fishes.reverse();
            fishes.forEach((row) => {
if(row.MushId==100)lifesaver=row;
                if ((rndm + 1) >= row.Chance && flag) {
                    x = row;
                    flag = false;

                }
                

            })
            if (rndm <= 1030) {
                x = lifesaver
            }

            let nBags = ss.Bags.amount * 10;
            let nn = 0;
            ss.Inventory.forEach((row) => {
                nn += row.ItemQuantity;
            })

             if ((nBags - nn) != 0) {
                if(ss.Rod.durability==1){
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, {$set:{"Rod.name":'-',"Rod.durability":0,"Rod.desc":'-'}});
                    interaction.channel.send("Your fishing rod broke!");

                }
                else{
                await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Rod.durability":-1}});
                }
                 if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": x.Name.concat(',',sizes[xtra]) })) {
                     await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": x.Name.concat(',',sizes[xtra]) }, { $inc: { "Inventory.$.ItemQuantity": 1 } });
                 }
                 else {
                     await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": x.Name.concat(',',sizes[xtra]), "ItemQuantity": 1, "Desc": x.Desc, "Icon": x.Icon } } });
                 }
                 timeout.push(interaction.user.id);

                 setTimeout(() => {
                     timeout.shift();
                 }, time);
                 return interaction.reply({ content: 'Congrats you have catched a \n' +sizes[xtra]+' '+ x.Name});
                }
                else{
                    return interaction.reply({ content: 'Your bags are full, sell or craft something' });


                }
                } else {
                    return interaction.reply({ content: 'You must equip a fishing rod first' });

             }
        } return interaction.reply({ content: 'Create a gnomesona first' });


    }

}
