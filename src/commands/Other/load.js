const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const mineralSchema = require('../../Schemas.js/mineralSchema');
module.exports = {
    data: new SlashCommandBuilder().setName('load').setDescription("Setup the mines"),
    async execute(interaction) {
        if (interaction.user.id == 863093732194517002) {
            mineralSchema.create({
                MinId: 1,
                Name: 'Soil',
                Price: 3,
                Desc: 'Fresh soil, low-priced on the market, stuff can still be made out of it',
                Icon: ' <:siol:1110657644550705333>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 0
            })
            
            mineralSchema.create({
                MinId: 2,
                Name: 'Stone',
                Price: 10,
                Desc: 'Hard and big rock, can be sold or melted',
                Icon: ' <:steno:1110657645628625109>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 20

            })
            mineralSchema.create({
                MinId: 3,
                Name: 'Copper',
                Price: 10,
                Desc: 'Redish metal, extremely good conductor of heat, can be sold or repurposed for other projects',
                Icon: ' <:coprer:1110657647516061796>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 30
            })
            mineralSchema.create({
                MinId: 35,
                Name: 'Iron',
                Price: 25,
                Desc: 'Base metal for weapons and other things',
                Icon: ' <:seelvear:1110657649663545366>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 42
            })
            mineralSchema.create({
                MinId: 4,
                Name: 'Silver',
                Price: 30,
                Desc: 'Durable and malleable metal, would fetch a decent price but it can always be used for smithing',
                Icon: ' <:seelvear:1110657649663545366>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 55
            })
            mineralSchema.create({
                MinId: 5,
                Name: 'Gold',
                Price: 35,
                Desc: 'Most precious of all metals, can be sold raw or melted',
                Icon: ' <:goldd:1110657651324489770>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 65
            })
            mineralSchema.create({
                MinId: 6,
                Name: 'Opal',
                Price: 25,
                Desc: 'A valuable ore that resembles a seashell',
                Icon: ' <:opol:1110657653954330804>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 80
            })
            mineralSchema.create({
                MinId: 7,
                Name: 'Diamond',
                Price: 70,
                Desc: 'Toughest material known to gnome-kind, fetches a high price',
                Icon: ' <:dimond:1110657642734563370>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 90
            })
            mineralSchema.create({
                MinId: 8,
                Name: 'Chest',
                Price: 5,
                Desc: 'Contains a random item, requires a copper key to open',
                Icon: ' <:chezt:1114645671006437487>',
                Show: 'Mineral',
                Equipable: false,
                IngredientF: '-',
                Chance: 110
            })
            mineralSchema.create({
                MinId: 9,
                Name: 'Pot',
                Price: 10,
                Desc: 'Brown pot made from dirt, sells for 10 dabloons',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Soil',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 10,
                Name: 'Tea set',
                Price: 15,
                Desc: 'Completed tea set, kettle and all',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Pot,Pot',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 11,
                Name: 'Flimsy key',
                Price: 5,
                Desc: 'This key is necessary for opening chests, but it will break afterwards',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Copper',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 12,
                Name: 'Wire',
                Price: 5,
                Desc: 'Made from copper, excels at conducting electricity but it can be worked on even more',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Copper,Copper',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 13,
                Name: 'Silver wire',
                Price: 9,
                Desc: 'Strong wire, can be used to make multiple armor sets',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Wire,Silver',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 14,
                Name: 'Basic wire armor',
                Price: 60,
                Desc: 'Simple wire set',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Wire,Wire',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 15,
                Name: 'Lower Silver armor',
                Price: 75,
                Desc: 'Imperfect armor set',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silver wire,Wire',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 16,
                Name: 'High Silver armor',
                Price: 100,
                Desc: 'Tough armor made from Silver, valued by many',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silver wire,Silver wire',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 17,
                Name: 'Maleable gold',
                Price: 30,
                Desc: 'Great things can be made from this base material',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Gold',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 18,
                Name: 'Golden goblet',
                Price: 90,
                Desc: 'Drinking from this goblet may cause extreme satisfaction',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Maleable gold',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 19,
                Name: 'High golden armor',
                Price: 150,
                Desc: 'Heavy and impractical... but flashy',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silver wire,Maleable gold',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 20,
                Name: 'Moon armor',
                Price: 95,
                Desc: 'Lower armor that has been blessed by moonlight',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Lower Silver armor,Opal',
                Chance: 150
            })

            mineralSchema.create({
                MinId: 21,
                Name: 'Moon golden goblet',
                Price: 110,
                Desc: 'Golden goblet blessed by the moon, water served from it shall always be clear',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Lower Silver armor,Opal',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 22,
                Name: 'Polished stone',
                Price: 20,
                Desc: 'Good-looking stone, may be repurposed',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Stone',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 23,
                Name: 'Stone rosary',
                Price: 25,
                Desc: 'This rosary may have beads but its missing a symbol to pray for',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Polished stone,Wire',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 24,
                Name: 'Moon rosary',
                Price: 55,
                Desc: 'This rosary now holds the moon symbol',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Stone rosary,Opal',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 25,
                Name: 'Sun rosary',
                Price: 80,
                Desc: 'This rosary now holds the sun symbol, a devout believer most priced posession',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Stone rosary,Maleable gold',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 26,
                Name: 'Mithril',
                Price: 70,
                Desc: 'This fancy metal is greatly appreciated by elves',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silver,Silver',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 27,
                Name: 'Mithril mail',
                Price: 85,
                Desc: 'Light and strong, perfect for mobile gnomes',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Mihtril',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 28,
                Name: 'Silverware',
                Price: 36,
                Desc: 'Fancy utensils for fancy gnomes',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silver',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 29,
                Name: 'Golden spoon',
                Price: 70,
                Desc: 'It is more than a saying now',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Silverware,Maleable gold',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 30,
                Name: 'Steel',
                Price: 25,
                Desc: 'Strong alloy, necessary for weapon and shield forging',
                Icon: '',
                Show: 'Crafted',
                Equipable: false,
                IngredientF: 'Iron,Copper',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 31,
                Name: 'Sword mold',
                Price: 10,
                Desc: 'Mold shaped like a sword',
                Icon: '',
                Show: 'Mold',
                Equipable: false,
                IngredientF: '-',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 32,
                Name: 'Axe mold',
                Price: 10,
                Desc: 'Mold shaped like the head of an axe',
                Icon: '',
                Show: 'Mold',
                Equipable: false,
                IngredientF: '-',
                Chance: 150
            })
            mineralSchema.create({
                MinId: 33,
                Name: 'Shield mold',
                Price: 10,
                Desc: 'Shield-shaped mold, its pretty circular',
                Icon: '',
                Show: 'Mold',
                Equipable: false,
                IngredientF: '-',
                Chance: 150
            })
            
                       return await interaction.reply({ content: 'Dropped!', ephemeral: true });
        }
        await interaction.reply({ content: 'AHHAHAHAHAHAHAHA', ephemeral: true });

    }
}
