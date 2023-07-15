const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const NoteSchema = require('../../Schemas.js/noteSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('createnote').setDescription("Create a note").addStringOption(option =>
		option.setName('title')
			.setDescription('Set a title for this note')
			.setRequired(true))
			.addStringOption(option =>
				option.setName('text')
					.setDescription('Content for this note (maximum 500 characters)')
                    .setMaxLength(2000)
					.setRequired(true)),
                    
                    
  async execute(interaction) {
    const user = await NoteSchema.findOne({UserId: interaction.user.id});
if(user){
    if(user.number!=3){
        await NoteSchema.findOneAndUpdate({"UserId":interaction.user.id},{$inc:{"number":1}})

        await NoteSchema.findOneAndUpdate({"UserId":interaction.user.id},{$push:{"notes":{ "name":interaction.options.getString('title'),"noteID":user.number,"Desc":interaction.options.getString('text')}}});

    }
    else{
        return interaction.reply({content: 'You have reached the limit of notes, delete one first'});
  
    }
}else{
    NoteSchema.create({
        UserId: interaction.user.id,
    number: 0})
         await NoteSchema.findOneAndUpdate({"UserId":interaction.user.id}, {$push:{"notes":{ "name":interaction.options.getString('title'),"noteID":1,"Desc":interaction.options.getString('text')}}});
         await NoteSchema.findOneAndUpdate({"UserId":interaction.user.id},{$inc:{"number":1}})
        
}
return interaction.reply({content: 'Created the note: '+interaction.options.getString('title')});


  }}