const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const priceSchema = require('../../Schemas.js/pricesSchema');
module.exports = {
    data: new SlashCommandBuilder().setName('drop').setDescription("Setup recipes"),
    async execute(interaction) {
        if (interaction.user.id == 863093732194517002) {
            priceSchema.create({
                MushId: 22,
                Name: 'Mushroom soup',
                Price: 15,
                Chance: 1010,
                Desc: 'Chunky soup made from edible mushrooms, sells for 15 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:soup:1104070907355468046>',
                bonus: 10,
                IngredientF: 'Red mushroom',
                IngredientS: 'AnyE'
            })
            priceSchema.create({
                MushId: 23,
                Name: 'Blue Juice',
                Price: 3,
                Chance: 1001,
                Desc: 'Popular shroom juice, sells for 3 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:blueP:1104102529198985226>',
                bonus: 5,
                IngredientF: 'Blue mushroom',
                IngredientS: 'Blue mushroom'

            })
            priceSchema.create({
                MushId: 24,
                Name: 'Mushroom skewer',
                Price: 10,
                Chance: 1001,
                Desc: 'Gourmet delicacy, sells for 10 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:skewer:1104110226656997467>',
                bonus: 4,
                IngredientF: 'AnyE',
                IngredientS: 'AnyE'

            })
            priceSchema.create({
                MushId: 25,
                Name: 'Glazed mushrooms',
                Price: 16,
                Chance: 1001,
                Desc: 'Fungus dish with a sweet and complex taste, sells for 16 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:glazed:1104113250653716530>',
                bonus: 17,
                IngredientF: 'Honey fungus',
                IngredientS: 'Honey fungus'

            })
            priceSchema.create({
                MushId: 26,
                Name: 'Death soup',
                Price: 75,
                Chance: 1001,
                Desc: 'Product of two death trumpets, sells for 75 dabloons',
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:poisonS:1104118838292926525>',
                bonus: 0,
                IngredientF: 'Death trumpet',
                IngredientS: 'Death trumpet'

            })
            priceSchema.create({
                MushId: 27,
                Name: 'Poison',
                Price: 15,
                Chance: 1001,
                Desc: 'Extracted from two poisonous mushrooms, sells for 15 dabloons',
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:poison:1104121964542566451>',
                bonus: 0,
                IngredientF: 'AnyP',
                IngredientS: 'AnyP'

            })
            priceSchema.create({
                MushId: 28,
                Name: 'Fungi tart',
                Price: 25,
                Chance: 1001,
                Desc: 'Scrumptious looking tart, sells for 25 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:tart:1104123159080357929>',
                bonus: 20,
                IngredientF: 'Enoki mushrooms',
                IngredientS: 'Honey fungus'

            })
            priceSchema.create({
                MushId: 29,
                Name: 'Failure',
                Price: 1,
                Chance: 1001,
                Desc: 'A bone??, worth 1 dabloon',
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:unedible:1104125092750962758>',
                bonus: 0,
                IngredientF: 'Fail',
                IngredientS: 'Fail'

            })
            priceSchema.create({
                MushId: 30,
                Name: 'Elfin tonic',
                Price: 250,
                Chance: 1001,
                Desc: 'Highly valuable concoction, worth 250 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:tonic:1104126142354575480>',
                bonus: 30,
                IngredientF: 'Elfin saddle',
                IngredientS: 'Elfin saddle'

            })
            priceSchema.create({
                MushId: 31,
                Name: "Copious mushroom skewers",
                Price: 15,
                Chance: 1001,
                Desc: 'Cooked to perfection, worth 15 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:copious:1104127497001504768>',
                bonus: 15,
                IngredientF: 'Mushroom',
                IngredientS: 'Mushroom'

            })
            priceSchema.create({
                MushId: 32,
                Name: "Mushroom sauté",
                Price: 20,
                Chance: 1001,
                Desc: 'Simple browned mushrooms, sells for 20 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:saute:1104128403206049802>',
                bonus: 19,
                IngredientF: 'Enoki mushrooms',
                IngredientS: 'Mushroom'

            })
            priceSchema.create({
                MushId: 33,
                Name: 'Sulfur extract',
                Price: 50,
                Chance: 1010,
                Desc: 'Pure extract from sulfur tufts, sells for 48 dabloons',
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:tuft:1104230857461465098>',
                bonus: 0,
                IngredientF: 'Sulfur tuft',
                IngredientS: 'Sulfur tuft'
            })
            priceSchema.create({
                MushId: 34,
                Name: 'Fungi mead',
                Price: 35,
                Chance: 1010,
                Desc: 'Destilled mead made from shrooms, sells for 35 dabloons',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:mead:1104238103473958993>',
                bonus: 40,
                Mushroom: false,
                IngredientF: 'Oyster mushroom',
                IngredientS: 'Honey fungus'
            })
            priceSchema.create({
                MushId: 35,
                Name: 'Moss clump',
                Price: 0,
                Chance: 1010,
                Desc: 'Its just more moss, sells for nothing',
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:clump:1104240118841217034>',
                bonus: 0,
                IngredientF: 'Moss',
                IngredientS: 'Moss'
            })
            priceSchema.create({
                MushId: 36,
                Name: 'Clam chowder',
                Price: 45,
                Chance: 1010,
                Desc: `Don't think about it too much, sells for 45 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:chowder:1104289719640150016>',
                bonus: 15,
                IngredientF: 'Oyster mushroom',
                IngredientS: 'Oyster mushroom'

            })
            priceSchema.create({
                MushId: 37,
                Name: 'Omelette',
                Price: 69,
                Chance: 1010,
                Desc: `Simple and plump, sells for 69 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:omelet:1104954912443469955>',
                bonus: 15,
                IngredientF: 'Witches egg',
                IngredientS: 'Witches egg'

            })
            priceSchema.create({
                MushId: 38,
                Name: 'Mushroom omelette',
                Price: 35,
                Chance: 1010,
                Desc: `Made from an "egg" and a mushroom, sells for 35 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:mushroomomelet:1104951671307645030>',
                bonus: 20,
                IngredientF: 'Witches egg',
                IngredientS: 'AnyE'

            })
            priceSchema.create({
                MushId: 39,
                Name: 'Egg pudding',
                Price: 45,
                Chance: 1010,
                Desc: `Sweet and fluffy, maybe a little too much, sells for 45 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:pudding:1104951708431437894>',
                bonus: 18,
                IngredientF: 'Witches egg',
                IngredientS: 'Honey fungus'

            })
            priceSchema.create({
                MushId: 40,
                Name: 'Meat pie',
                Price: 60,
                Chance: 1010,
                Desc: `Made from some "chicken" and an "egg", sells for 60 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:meatPie:1104954533911740546>',
                bonus: 20,
                IngredientF: 'Chicken of the woods',
                IngredientS: 'Witches egg'

            })

            priceSchema.create({
                MushId: 41,
                Name: 'Meat skewer',
                Price: 50,
                Chance: 1010,
                Desc: `Beyond meat, sells for 50 dabloons`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:meatSkewer:1104954532762484766>',
                bonus: 25,
                IngredientF: "Chicken of the woods",
                IngredientS: "Chicken of the woods"

            })
            priceSchema.create({
                MushId: 42,
                Name: 'Destroying stew',
                Price: 40,
                Chance: 1010,
                Desc: `This stew will most likely destroy your insides, sells for 40 dabloons`,
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:angelS:1105347053976047624>',
                bonus: 30,
                IngredientF: 'Destroying angel',
                IngredientS: 'Destroying angel'

            })
            priceSchema.create({
                MushId: 43,
                Name: 'Black juice',
                Price: 50,
                Chance: 1010,
                Desc: `It almost looks good, sells for 50 dabloons`,
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:dcup:1107911249183920198>',
                bonus: 20,
                IngredientF: 'Destroying angel',
                IngredientS: 'Death trumpet'

            })
            priceSchema.create({
                MushId: 44,
                Name: 'Sulfur bits',
                Price: 55,
                Chance: 1010,
                Desc: `Burnt, poisonous and hard to chew, sells for 55 dabloons`,
                Poisonous: true,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:rockF:1107911106359472182>',
                bonus: 20,
                IngredientF: 'Sulfur tuft',
                IngredientS: 'Death trumpet'

            })
            priceSchema.create({
                MushId: 45,
                Name: 'Charcoal chunk',
                Price: 10,
                Chance: 1010,
                Desc: `Reliable fuel used for many things, sells for 10 dabloons but it has other uses`,
                Poisonous: false,
                Show: 'Mix',
                Consumable: true,
                Icon: ' <:charcoal:1109613270568009778>',
                bonus: 1,
                IngredientF: 'Charcoal burner',
                IngredientS: 'Charcoal burner'

            })

            return await interaction.reply({ content: 'Dropped!', ephemeral: true });
        }
        return await interaction.reply({ content: 'XDDDDDDDDDDDDDDDD', ephemeral: true });

    }
}
