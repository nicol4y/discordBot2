const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const NoteSchema = require('../../Schemas.js/noteSchema');

module.exports = {
  data: new SlashCommandBuilder().setName('deletenote').setDescription("Delete a note").addStringOption(option => option.setName('choice').setDescription('Select a note').setRequired(true)),


  async execute(interaction) {
    const user = await NoteSchema.findOne({ UserId: interaction.user.id });
    if (user) {
      if (await NoteSchema.findOne({ UserId: interaction.user.id, "notes.name": interaction.options.getString('choice') })) {
        await NoteSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $inc: { number: -1 } });
        await NoteSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { notes: { name: interaction.options.getString('choice') } } });
        return interaction.reply({ content: 'Note deleted' });
      }
      return interaction.reply({ content: 'Note not found' });
    } else {
      return interaction.reply({ content: 'You have got no notes, create one with /createnote' });
    }

  }
}