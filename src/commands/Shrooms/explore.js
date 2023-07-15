const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require('../../validate');
var timeout = [];

module.exports = {
    data: new SlashCommandBuilder().setName('explore').setDescription("Explore the forest to collect mushrooms"),
    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Rest your bones first, 10 minutes between trips`, ephemeral: true });
        let fr = 0;
        const ss = await UserSchema.findOne({ UserId: interaction.user.id });
        if (ss) {
            let time = 600000;
            fr += ss.Bonus;
            let rndm = urlV.getRandomInt(fr, 1000);
            let xtra = urlV.getRandomInt(1,10);
            let numbrs = await pricesSchema.find();
            let x;
            let val = 1;
            let flag = true;
            let lifesaver;
            await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $set: { "Bonus": 0 } });
            if (ss.Status == 'Hasty') await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $set: { "Status": 'Good', "Bonus":0 } });
            if (ss.Status == 'Poisoned') time = time * 1.5;
            numbrs.sort((a, b) => b.Chance - a.Chance);
            numbrs.forEach((row) => {

                if (((rndm + 1) - row.Chance) > 0 && flag && row.Show=='Mushroom') {
                    x = row;
                    flag = false;

                }
                if (row.MushId == 1) {
                    lifesaver = row;
                }

            })
            if (rndm <= 139) {
                x = lifesaver
            }

            let bags = await UserSchema.findOne({ UserId: interaction.user.id });
            let nBags = bags.Bags.amount * 10;
            let nn = 0;
            bags.Inventory.forEach((row) => {
                nn += row.ItemQuantity;
            })

            if ((nBags - nn) != 0) {
                if ((nBags - nn) != 1) {
                    if (xtra <= 4){val++;}
                    if(ss.mice) {
                       val+=2;
                        
                        await UserSchema.findOneAndUpdate({"UserId": interaction.user.id}, {$set:{"mice": false}})

                    }
                }
                if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": x.Name })) {
                    await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": x.Name }, { $inc: { "Inventory.$.ItemQuantity": val } });
                }
                else {
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": x.Name, "ItemQuantity": val, "Desc": x.Desc, "Icon": x.Icon } } });
                }
                timeout.push(interaction.user.id);

                setTimeout(() => {
                    timeout.shift();
                }, time);
                return interaction.reply({ content: 'Congrats you have found \n' + x.Name + ' x' + val.toString() });
            } else {
                return interaction.reply({ content: 'Your bags are full, sell or craft something' });
            }
        } return interaction.reply({ content: 'Create a gnomesona first' });


    }

}
