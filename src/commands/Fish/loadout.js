const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const shopSchema = require('../../Schemas.js/shopSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('loadout').setDescription("Display your (or someone else's) gnome equipment").addUserOption(option => option.setName('target').setDescription('Select a user')),
  async execute(interaction) {
    const user = interaction.options.getUser('target') ?? interaction.user;
    const opt = await UserSchema.findOne({UserId: user.id});
    //await UserSchema.updateMany({},{$set:{"Rod.name":'-',"Rod.durability":0,"Rod.desc":'-'}});

    if(opt){
        let name = `'s loadout`
        if(opt.Gname[opt.Gname.length-1]=='s') name = `' loadout`;
        const usr = new EmbedBuilder()
        .setTitle(opt.Gname + name)
        .setColor('#33cc33')          
        .setThumbnail(opt.Avatar)
        .addFields(
            { name: 'Rod: '+opt.Rod.name, value: 'Uses left X'+opt.Rod.durability.toString() },
            { name: 'Furnace: '+opt.Furnace.name, value: 'Current charge: '+opt.Furnace.cfuel.toString()+'/'+opt.Furnace.mfuel.toString() },
            { name: 'Pickaxe: '+opt.Pick.name, value: 'Uses left X'+opt.Pick.durability.toString() },


          
        )
        .setFooter({text: `Requested by ` + interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
      
      await interaction.reply({ embeds: [usr] });
    }
    else{
        await interaction.reply({ content: `This user does not have a gnomesona` });
    }
  }
}