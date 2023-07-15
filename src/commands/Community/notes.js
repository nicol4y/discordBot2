const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const NoteSchema = require('../../Schemas.js/noteSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('notes').setDescription("See your notes"),
		
                    
  async execute(interaction) {
    const user = await NoteSchema.findOne({UserId: interaction.user.id});
if(user){
    
    const notEmb = new EmbedBuilder()
    .setTitle('Notes')
    .setColor('#9cc5b6')          
    .setThumbnail('https://cdn.discordapp.com/attachments/1095863665636429927/1104279406106648636/52f7c21c73ce705493b6e881796c3418.png')
	.setDescription('Check your notes')
    if(user.number!=0){

   let i = 0;
    
    user.notes.forEach((row=>{
        i++
        notEmb.addFields({name: i.toString() +'. '+row.name, value: '\u200b'})

    }))
    return interaction.reply({embeds: [notEmb]});;

}else{
    notEmb.addFields({name: 'You have got no notes', value: '\u200b'})
    return interaction.reply({embeds: [notEmb]});;

}

}else{
    

return interaction.reply({content: 'You have got no notes, create one with /createnote'});
}

  }}