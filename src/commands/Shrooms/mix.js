const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const pricesSchema = require('../../Schemas.js/pricesSchema');

module.exports = {
	data: new SlashCommandBuilder().setName('mix').setDescription("Mix two mushrooms").addStringOption(option =>
		option.setName('mushroomie')
			.setDescription('First mushroom to mix')
			.setRequired(true))
		.addStringOption(option =>
			option.setName('mushroomoo')
				.setDescription('Second mushroom to mix')
				.setRequired(true)),
	async execute(interaction) {
		const user = await UserSchema.findOne({ UserId: interaction.user.id });
		if (user) {
			const lsit = await pricesSchema.find();
			let flag = 0;
			const k1 = interaction.options.getString('mushroomie');
			const k2 = interaction.options.getString('mushroomoo');
			let item10;
			let item20;
			user.Inventory.forEach((row => {
				if (row.Item == (k1)) item10 = row, flag++;
				if (row.Item == (k2)) item20 = row, flag++;

			}))
			
			let item1;
			let item2;
			let result;
			lsit.forEach((row => {
				if (row.Name == k1 && row.Show == 'Mushroom' && row.Consumable) item1 = row;
				if (row.Name == k2 && row.Show == 'Mushroom' && row.Consumable) item2 = row;
			}))
			if (flag == 2 && (item1 && item2)) {
				if(k1==k2&&item10.ItemQuantity==1) return interaction.reply({ content: 'You do not have enough items'});
				await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": k1 }, { $inc: { "Inventory.$.ItemQuantity": -1 } });
				await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": k2 }, { $inc: { "Inventory.$.ItemQuantity": -1 } });
				await UserSchema.updateMany({UserId:interaction.user.id},{$pull:{Inventory:{ItemQuantity:0}}})
		

				lsit.forEach((row => {
					if (row.IngredientF == item10.Item && row.IngredientS == item20.Item) result = row;

				}))
				if (!result) {
					lsit.forEach((row) => {
						if (row.IngredientF == item10.Item && row.IngredientS == 'AnyE' && !item2.Poisonous) result = row;
						else if (row.IngredientF == item10.Item && row.IngredientS == 'AnyP' && item2.Poisonous) result = row;
						if (result) return;

					})

					if (!result) {
						lsit.forEach((row) => {
							if (row.IngredientF == 'AnyE' && row.IngredientS == 'AnyE' && (!item1.Poisonous && !item2.Poisonous)) result = row;
							else if (row.IngredientF == 'AnyP' && row.IngredientS == 'AnyP' && (item1.Poisonous && item2.Poisonous)) result = row;
							else if (row.IngredientF == 'Fail' && row.IngredientS == 'Fail' && ((item1.Poisonous && !item2.Poisonous) || (!item1.Poisonous && item2.Poisonous))) result = row;
							if (result) return;

						})
					}
				}

				if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": result.Name })) {
					await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": result.Name }, { $inc: { "Inventory.$.ItemQuantity": 1 } });
				}
				else await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": result.Name, "ItemQuantity": 1, "Desc": result.Desc, "Icon": result.Icon } } });

				return interaction.reply({ content: 'You have prepared a ' + result.Name + result.Icon });

			}
			else {
				return interaction.reply({ content: 'Item(s) not found/ one of this items is not edible' });

			}
		}
		else {
			return interaction.reply({ content: 'Gnomesona does not exist' });

		}
	}
}