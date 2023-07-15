const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const mineralSchema = require('../../Schemas.js/mineralSchema');
var urlV = require('../../validate');
var timeout = [];

module.exports = {
    data: new SlashCommandBuilder().setName('delve').setDescription("Explore the depths wether you have a pickaxe or not"),
    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `You are still shaken from your last trip, 1 hour between trips`, ephemeral: true });
        const ss = await UserSchema.findOne({ UserId: interaction.user.id });

        if (ss) {
            let mark = 120;
            let pik = 0;
            if (ss.Pick.name == '-') {
                mark = 30;
            }
            else pik =15;
            let time = 3600000;
            let rndm = urlV.getRandomInt(pik, mark);
            let numbrs = await mineralSchema.find();
            let x;
            let flag = true;

            if (ss.Status == 'Poisoned') time = time * 1.5;
            let fishes = [];
            numbrs.forEach((row) => {
                if (row.Show == 'Mineral') fishes.push(row);;
                
            })
            fishes.sort((a, b) => a.Chance - b.Chance);
            fishes.reverse();
            fishes.forEach((row) => {
                if (((rndm) >= row.Chance) && flag) {
                    x = row;
                    flag = false;

                }


            })
            
            

            let nBags = ss.Bags.amount * 10;
            let nn = 0;
            ss.Inventory.forEach((row) => {
                nn += row.ItemQuantity;
            })

            if ((nBags - nn) != 0) {
                if (ss.Pick.durability == 1) {
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $set: { "Pick.name": '-', "Pick.durability": 0, "Pick.desc": '-' } });
                    interaction.channel.send("Your Pickaxe broke!");

                }
                if (ss.Pick.name != '-') {
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Pick.durability": -1 } });
                }
                if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": x.Name })) {
                    await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": x.Name }, { $inc: { "Inventory.$.ItemQuantity": 1 } });
                }
                else {
                    await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": x.Name, "ItemQuantity": 1, "Desc": x.Desc, "Icon": x.Icon } } });
                }
                timeout.push(interaction.user.id);

                setTimeout(() => {
                    timeout.shift();
                }, time);
                let ending= 'You have discovered a piece of ';
                if(x.Name=='Chest') ending = 'You have found a '
                return interaction.reply({ content: ending + x.Name+x.Icon });
            }
            else {
                return interaction.reply({ content: 'Your bags are full, sell or craft something' });


            }

        } return interaction.reply({ content: 'Create a gnomesona first' });


    }

}
