const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const mineralSchema = require('../../Schemas.js/mineralSchema');

module.exports = {
  data: new SlashCommandBuilder().setName('minerals').setDescription('Display mineral info'),
  async execute(interaction) {
    let coll = [];
    let frog = 1;
    let current = 0;
    let msrms = await mineralSchema.find();
    const user = interaction.user;
    let txt = user.username + '#' + user.discriminator;
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
    let msmrsEmb = new EmbedBuilder()
      .setTitle('Mineral info')
      .setColor('#fc1620')
      .setFooter({ text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL() })
    let g = 0;
    msrms.sort((a, b) => a.MinId - b.MinId);
    msrms.forEach((row) => {
      if (row.Show == 'Mineral') msmrsEmb.addFields({ name: row.Name+row.Icon, value: row.Desc })
      if (((frog % 5) == 0) && row.Show == 'Mineral') {
        g++;
        coll.push(msmrsEmb);
        msmrsEmb = new EmbedBuilder()
          .setTitle('Mineral info')
          .setColor('#fc1620')
          .setFooter({ text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL() })
      }
      frog++;

    })
    if (g * 5 != frog) {
      coll.push(msmrsEmb);
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