const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');
var urlV = require ('../../validate');
module.exports = {
data: new SlashCommandBuilder()
	.setName('deliver')
	.setDescription('Give me a message and Ill deliver it anywhere on the server')
	.addChannelOption(option =>
		option.setName('channel')
			.setDescription('The channel to deliver into')
			.addChannelTypes(ChannelType.GuildText)
			.setRequired(true))
	.addStringOption(option =>
		option.setName('input')
			.setDescription('Text to deliver')
			.setMaxLength(2000))
    .addStringOption(option =>
        option.setName('file')
        .setDescription('File to deliver (must be a link)')),
			async execute(interaction){
				let txt = interaction.options.getString('input');
				let fil = interaction.options.getString('file');
				const member = interaction.member ;
if(member.permissionsIn(interaction.options.getChannel('channel')).has('SendMessages')){
if(txt||fil){

				const usr = new EmbedBuilder()
				.setTitle('Message delivery!')
				if(txt){
					usr.addFields({name:'Message:',value: txt});
				}
				if(fil){
					if(urlV.urlValid(fil)){

					usr.setImage(fil);
					}
					else{
						return interaction.reply({content: 'File was not a link 💀💀💀', ephemeral:true});

					}
				}
				const final = interaction.options.getChannel('channel');
				
				final.send({embeds:[usr]});
				return interaction.reply({content: 'Message delivered!', ephemeral:true});
			
}
else{
	return interaction.reply({content: 'Nothing to deliver 💀💀💀', ephemeral:true});
}
}
return interaction.reply({content: 'Unable to deliver message', ephemeral:true});


			}
			
	}