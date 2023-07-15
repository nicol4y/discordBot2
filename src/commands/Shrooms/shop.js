const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const itemSchema = require('../../Schemas.js/shopSchema');
const UserSchema = require('../../Schemas.js/userSchema');

module.exports = {
  data: new SlashCommandBuilder().setName('shop').setDescription("Display prices for bags and badges"),
  async execute(interaction) {
    let items = await itemSchema.find();
    const user = interaction.user;
    let txt = user.username + '#' + user.discriminator;
    let awe = 0;
    let coll = [];
    let current = 0;
    let g = 0;
    let leadEmb = new EmbedBuilder()
      .setTitle(`Molka's shop`)
      .setColor('#a6cee3')
      .setDescription('Come closer and check my goods')
      .setThumbnail('https://media.discordapp.net/attachments/1097682794991341708/1105343235527811133/88b4c614a94b793668dd6d53a8259082.jpg?width=675&height=655')
      .setFooter({ text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL() })
    const button = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("prev")
          .setEmoji("<:gnomeL:1104664337286701066>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("next")
          .setEmoji("<:gnomeR:1104664413023260792>")
          .setStyle(ButtonStyle.Primary),
      )

    items.forEach((row) => {
      
        leadEmb.addFields({ name: row.name + row.icon, value: row.desc })
        awe++;
    
    
    if ((awe % 4) == 0) {
        g++;

        coll.push(leadEmb);
        leadEmb = new EmbedBuilder()
        .setTitle(`Molka's shop`)
        .setColor('#a6cee3')
        .setDescription('Come closer and check my goods')
        .setThumbnail('https://media.discordapp.net/attachments/1097682794991341708/1105343235527811133/88b4c614a94b793668dd6d53a8259082.jpg?width=675&height=655')
        .setFooter({ text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL() })
      }
    })
    if (4 >= awe) return interaction.reply({ embeds: [leadEmb] });
            if (g * 4 != awe) {
                coll.push(leadEmb);
            }
    const message = await interaction.reply({ embeds: [coll[0]], components: [button] });
            const collectorFilter = i => i.user.id === interaction.user.id;
            const collector = await message.createMessageComponentCollector({ filter: collectorFilter, time: 60000 });
            try {

                collector.on('collect', async i => {
                    if (i.customId == 'prev') {

                        if (current == 0) {
                            await i.update({ embeds: [coll[coll.length - 1]], components: [button] });
                            current = coll.length - 1;
                        }
                        else {
                            await i.update({ embeds: [coll[current - 1]], components: [button] });
                            current--;
                        }
                    }
                    if (i.customId == 'next') {

                        if ((current + 1) == coll.length) {
                            await i.update({ embeds: [coll[0]], components: [button] });
                            current = 0;
                        }
                        else {
                            await i.update({ embeds: [coll[current + 1]], components: [button] });
                            current++;
                        }
                    }

                })

            }
            catch (e) {
            }



  }
}