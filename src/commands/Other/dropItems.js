const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const shopSchema = require('../../Schemas.js/shopSchema');
module.exports = {
    data: new SlashCommandBuilder().setName('dropitems').setDescription("Setup the item shop"),
    async execute(interaction) {
        if (interaction.user.id == 863093732194517002) {
            shopSchema.create({
                name: 'Shamrock badge',
                Price: 300,
                desc: 'The more the merrier, 300 dabloons each',
                icon: ' <:sham:1103889849540415528>',
            })
            shopSchema.create({

                name: 'Bag',
                Price: 25,

                desc: 'Each bag can carry a maximum of 10 items, 25 dabloons each',
                icon: ' <:bag:1105318590275653692>',

            })
            shopSchema.create({

                name: 'Mycelium',
                Price: 15,
                desc: 'Mycelium will guarantee you an extra mushroom the next time you explore, 15 dabloons each',
                icon: ' ',

            })
            
            shopSchema.create({

                name: 'Wooden fishing rod',
                Price: 17,
                desc: 'Flimsy fishing rod, can be used up to 3 times, selling for 17 dabloons',
                icon: ' <:ffishRod:1108154128242323476>',
                durability: 3,
                typeI: 'rod'

            })
            shopSchema.create({

                name: 'Fishing rod',
                Price: 30,
                desc: 'Tough and well-crafted fishing rod, breaks upon using it 10 times, selling for 30 dabloons',
                icon: ' <:fishRod:1108154127005007882>',
                durability: 10,
                typeI: 'rod'

            })
            shopSchema.create({

                name: 'Golden rod',
                Price: 50,
                desc: 'Rod refined to perfection, can be used up to 20 times, selling for 50 dabloons',
                icon: ' <:gRod:1108154129878110278>',
                durability: 15,
                typeI: 'rod'

            })
            shopSchema.create({

                name: 'Stone furnace',
                Price: 75,
                desc: 'Necessary in order to forge keys and other materials, selling for 75 dabloons',
                icon: ' <:furnace:1109614602175643768>',
                durability: 15,
                typeI: 'furnace'
                

            })
            shopSchema.create({

                name: 'Rusty pickaxe',
                Price: 15,
                desc: 'Past its prime, but it can still handle them rocks, breaks after 3 uses, selling for 15 dabloons',
                icon: ' <:rPick:1109670646398586942>',
                durability: 3,
                typeI: 'pickaxe'
                

            })
            shopSchema.create({

                name: 'Iron pickaxe',
                Price: 50,
                desc: 'Packs a punch and its pretty durable, breaks after 13 uses, selling for 50 dabloons',
                icon: ' <:rPick:1109670646398586942>',
                durability: 13,
                typeI: 'pickaxe'
                

            })
            shopSchema.create({

                name: 'Sword mold',
                Price: 10,
                desc: 'Mold shaped like a sword',
                icon: '',
                durability: 0,
                typeI: 'Mold'
                

            })
            shopSchema.create({

                name: 'Axe mold',
                Price: 10,
                desc: 'Mold shaped like the head of an axe',
                icon: '',
                durability: 0,
                typeI: 'Mold'
                

            })
            shopSchema.create({

                name: 'Charcoal chunk',
                Price: 12,
                desc: 'Reliable fuel used for many things, sells for 10 dabloons but it has other uses',
                icon: ' <:charcoal:1109613270568009778>',
                durability: 0,
                typeI: 'chunk'
                

            })
            return await interaction.reply({ content: 'Dropped!', ephemeral: true });
        }
        await interaction.reply({ content: 'AHHAHAHAHAHAHAHA', ephemeral: true });

    }
}
