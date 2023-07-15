const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const NoteSchema = require('../../Schemas.js/noteSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('open').setDescription("Open a note").addStringOption(option => option.setName('choice').setDescription('Select a note').setRequired(true)),
		
                    
  async execute(interaction) {
    const user = await NoteSchema.findOne({UserId: interaction.user.id});
if(user){
    let mess;
    if(user.number!=0){
        user.notes.forEach((row=>{
            if(row.name==interaction.options.getString('choice')) mess=row;
    
        }))
    if(mess){
    const notEmb = new EmbedBuilder()
    .setTitle(mess.name)
    .setColor('#9cc5b6')   
    .setThumbnail('https://cdn.discordapp.com/attachments/1095863665636429927/1104279406106648636/52f7c21c73ce705493b6e881796c3418.png')       
    .setDescription(mess.Desc)

    
    return interaction.reply({embeds: [notEmb]});;
    }
    }
    return interaction.reply({content: 'Note not found'});

}else{
    

return interaction.reply({content: 'You have got no notes, create one with /createnote'});
}

  }}