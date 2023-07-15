const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');
var urlV = require ('../../validate');

module.exports = {
	data: new SlashCommandBuilder().setName('leaderboard').setDescription("Top 10 gnomes based on shamrocks or dabloons").addStringOption(option =>
		option.setName('category')
			.setDescription('Sort category')
			.setRequired(true)
			.addChoices(
				{ name: 'Dabloons', value: 'Dabloons' },
				{ name: 'Badges', value: 'Badges' },
				
			)),
  async execute(interaction) {
    const user = interaction.user;
let txt = user.username +'#'+ user.discriminator;
    let count = 0;
let objs = await UserSchema.find();
let x = 0;
if(interaction.options.getString('category')=='Dabloons'){objs.sort(function(a,b){return b.Dabloons - a.Dabloons});x=1; }
else{ objs.sort(function(a,b){return b.Badges.amount - a.Badges.amount}); x=2 };

    const leadEmb = new EmbedBuilder()
    .setTitle('Leaderboard (' + interaction.options.getString('category')+')')
    .setColor('#00cdac')          
.setThumbnail(objs[0].Avatar)
    .setFooter({text: `Requested by ` + txt, iconURL: interaction.user.displayAvatarURL()})
    objs.forEach((row) =>{
        count++;
        if(interaction.options.getString('category')=='Dabloons')
        leadEmb.addFields({name: count.toString() + '. '.concat(row.Gname), value: 'x' + row.Dabloons.toString()});
        else leadEmb.addFields({name: count.toString() + '. '.concat(row.Gname), value: 'x' + row.Badges.amount.toString()});

        if(count==10) return;
        
    })
    return interaction.reply({embeds: [leadEmb]});
  }}