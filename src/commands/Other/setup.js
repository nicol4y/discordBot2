const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const priceSchema = require('../../Schemas.js/pricesSchema');
module.exports = {
    data: new SlashCommandBuilder().setName('setup').setDescription("Setup the shop (use once)"),
    async execute(interaction) {
        if (interaction.user.id == 863093732194517002) {
            priceSchema.create({
                MushId: 1,
                Name: 'Blue mushroom',
                Price: 1,
                Chance: 250,
                Desc: 'Most common mushroom out there, worth 1 dabloon',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true
            })
            priceSchema.create({
                MushId: 2,
                Name: 'Red mushroom',
                Price: 3,
                Chance: 340,
                Desc: 'Red mushroom with dots, worth 3 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true

            })
            priceSchema.create({
                MushId: 3,
                Name: 'Mushroom',
                Price: 5,
                Chance: 420,
                Desc: 'Edible grey mushroom, worth 5 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true

            })
            priceSchema.create({
                MushId: 4,
                Name: 'Honey fungus',
                Price: 7,
                Chance: 520,
                Desc: 'Sweet fungus, worth 7 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true

            })
            priceSchema.create({
                MushId: 5,
                Name: 'Oyster mushroom',
                Price: 10,
                Chance: 590,
                Desc: 'Looks like an oyster, worth 10 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true

            })
            priceSchema.create({
                MushId: 6,
                Name: 'Enoki mushrooms',
                Price: 12,
                Chance: 660,
                Desc: 'Many heads, worth 12 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 1,
                Consumable: true

            })
            priceSchema.create({
                MushId: 7,
                Name: 'Destroying angel',
                Price: 15,
                Chance: 700,
                Desc: 'Poisonous mushroom, worth 15 dabloons',
                Poisonous: true,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 8,
                Name: 'Sulfur tuft',
                Price: 18,
                Chance: 750,
                Desc: 'The water reeks..., worth 18 dabloons',
                Poisonous: true,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 9,
                Name: 'Death trumpet',
                Price: 25,
                Chance: 800,
                Desc: 'Deadly mushroom, worth 25 dabloons',
                Poisonous: true,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 10,
                Name: "Moss",
                Price: 0,
                Chance: 140,
                Desc: 'Grows everywhere, worth 0 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 11,
                Name: "Elfin saddle",
                Price: 100,
                Chance: 1000,
                Desc: 'Most dangerous mushroom in the forest, worth 100 dabloons',
                Poisonous: true,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 12,
                Name: "Chicken of the woods",
                Price: 20,
                Chance: 860,
                Desc: 'Tastes just like real chicken, worth 20 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 10,
                Consumable: true

            })
            priceSchema.create({
                MushId: 13,
                Name: `Witches egg`,
                Price: 30,
                Chance: 910,
                Desc: 'Suspiciously resembles a real egg, worth 30 dabloons',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 10,
                Consumable: true

            })
            priceSchema.create({
                MushId: 14,
                Name: `Mycelium`,
                Price: 10,
                Chance: 1010,
                Desc: 'This mushroom can only be obtained on the shop',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 0,
                Consumable: true

            })
            priceSchema.create({
                MushId: 15,
                Name: `Charcoal burner`,
                Price: 1,
                Chance: 950,
                Desc: 'Mushroom with fuel properties, might be useful for more than just food',
                Poisonous: false,
                Show: 'Mushroom',
                Icon: '',
                bonus: 5,
                Consumable: true

            })
            priceSchema.create({
                MushId: 100,
                Name: `Green bass`,
                Price: 20,
                Chance: 1030,
                Desc: `Disregarded as bycatch, this bass is one of the most common fish in all of Mirkwood`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:greenBass:1108214406132801577>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 101,
                Name: `Blood bass`,
                Price: 25,
                Chance: 1055,
                Desc: `Really agressive, not really strong, just like most people`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:bloodBass:1108208396554997780>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 102,
                Name: `Older bass`,
                Price: 35,
                Chance: 1080,
                Desc: `A bass that has avoided being catched for quite a long time`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:olderBass:1108208378943111349>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 103,
                Name: `Common trout`,
                Price: 40,
                Chance: 1110,
                Desc: `Common fish in Mirkwood, holds a little value nonetheless`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:commonTrout:1108208372668452944>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 104,
                Name: `Ember trout`,
                Price: 48,
                Chance: 1130,
                Desc: `It gets its name from the flame-like pattern printed on their scales`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:emberTrout:1108208389005250620>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 105,
                Name: `Clown trout`,
                Price: 55,
                Chance: 1150,
                Desc: `Not really that funny or interesting, still fetches a good price`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:clownTrout:1108208390641025114>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 106,
                Name: `Frosty trout`,
                Price: 60,
                Chance: 1175,
                Desc: `It is not cold or anything, it just looks icy`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:frostyTrout:1108208377236045915>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 107,
                Name: `Stripped porgy`,
                Price: 65,
                Chance: 1210,
                Desc: `Funny looking fish with some candycone vibe going on`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:strippedPorgy:1108208384500568106>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 108,
                Name: `Ironside porgy`,
                Price: 75,
                Chance: 1240,
                Desc: `Tough body all around, easy money all around`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:ironside:1108208375851925594>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 109,
                Name: `Mermaid carp`,
                Price: 82,
                Chance: 1280,
                Desc: `It does not resemble a mermaid at all, but it does look mesmerizing`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:mermaidCarp:1108208374757208164>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 110,
                Name: `Lightning carp`,
                Price: 85,
                Chance: 1335,
                Desc: `Does not produce electricity at all, but it looks cool`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:taxiCarp:1108208382592168058>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 111,
                Name: `Koi`,
                Price: 90,
                Chance: 1360,
                Desc: `This fish is considered a symbol of wealth`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:ornCarp:1108208386362839081>',
                bonus: 10,
                Consumable: false

            })
            priceSchema.create({
                MushId: 112,
                Name: `Mammoth salmon`,
                Price: 100,
                Chance: 1400,
                Desc: `Biggest fish in all of Mirwood, source of good fat and other things`,
                Poisonous: false,
                Show: 'Fish',
                Icon: ' <:mammothSalmon:1108208380801191996>',
                bonus: 10,
                Consumable: false

            })


            return await interaction.reply({ content: 'Dropped!', ephemeral: true });
        }
        await interaction.reply({ content: 'AHHAHAHAHAHAHAHA', ephemeral: true });

    }
}
