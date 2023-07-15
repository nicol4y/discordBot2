const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder().setName('giverole').setDescription('Give a role to a member').addUserOption(option => option.setName('target').setDescription('Select a user')).addRoleOption(option => option.setName('role').setDescription('Select a role')),
async execute(interaction) {
  const role = interaction.options.getRole('role');
const member = interaction.options.getMember('target');
     const sember = interaction.member ;
  // if (sember.permissions.has(PermissionsBitField.Flags.ManageRoles)){
member.roles.add(role);
return interaction.reply(`<@${member.id}> has acquired the ${role} role!`);
  // }
   // else{
     //  return interaction.reply(`I could call the police on you pal`);
   // }
},
};
