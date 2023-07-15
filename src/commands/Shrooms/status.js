const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('status').setDescription("Display your (or someone else's) gnome status").addUserOption(option => option.setName('target').setDescription('Select a user')),
  async execute(interaction) {
    const user = interaction.options.getUser('target') ?? interaction.user;
    const opt = await UserSchema.findOne({UserId: user.id});
    await UserSchema.updateMany({},{$set:{"Pick.name":'-',"Pick.durability":0,"Pick.desc":'-'}});

    if(opt){
        let name = `'s status`
        if(opt.Gname[opt.Gname.length-1]=='s') name = `' status`;
        const usr = new EmbedBuilder()
        .setTitle(opt.Gname + name)
        .setColor('#33cc33')          
        .setThumbnail(opt.Avatar)
        .addFields(
            { name: 'Status: ', value: opt.Status },
            { name: 'Bonus: ', value: opt.Bonus.toString()+'/1000' },
            { name: 'Dabloons: ', value: `$` + opt.Dabloons.toString()+' <a:dabloon:1100899765685850112>' },
            { name: 'Badges: ', value: `x` + opt.Badges.amount.toString()+' <:sham:1103889849540415528>' }

        )
        .setFooter({text: `Requested by ` + interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
      
      await interaction.reply({ embeds: [usr] });
    }
    else{
        await interaction.reply({ content: `This user does not have a gnomesona` });
    }
  }
}