const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');

module.exports = {
    data: new SlashCommandBuilder().setName('delete').setDescription("Delete your gnomesona"),
	async execute(interaction) {
		

		const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm')
			.setStyle(ButtonStyle.Danger);

		const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary);

		const row = new ActionRowBuilder()
			.addComponents(cancel, confirm);

		const response = await interaction.reply({
			content: `Are you sure you want to delete your gnomesona? (this can not be undone)`,
			components: [row],
		});
        const collectorFilter = i => i.user.id === interaction.user.id;
try {
	const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });

	if (confirmation.customId === 'confirm') {
    await UserSchema.deleteOne({UserId: interaction.user.id});
		await confirmation.update({ content: `Goodbye traveler`, components: [] });
	} else if (confirmation.customId === 'cancel') {
		await confirmation.update({ content: 'Action cancelled', components: [] });
	}
} catch (e) {
	await response.update({ content: 'Confirmation not received within 1 minute', components: [] });
}
	},
};