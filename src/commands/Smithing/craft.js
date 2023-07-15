const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const mineralSchema = require('../../Schemas.js/mineralSchema');
module.exports = {
	data: new SlashCommandBuilder().setName('craft').setDescription("Use one or two items to create something new (consumes one furnace charge)").addStringOption(option =>
		option.setName('elements')
			.setDescription('Enter the item(s) you want to work with (Item1,Item2)')
			.setRequired(true)),
	async execute(interaction) {
		const user = await UserSchema.findOne({ UserId: interaction.user.id });
		if (user) {
			const lsit = await mineralSchema.find();
			let flag = 0;
			const k1 = interaction.options.getString('elements').split(",");
			
			let item10;
			let item20;
			if(user.Furnace.name=='-')return interaction.reply({content: `You do not have a furnace`});

			user.Inventory.forEach((row => {
				if (row.Item == (k1[0])) item10 = row, flag++;
				if (row.Item == (k1[1])) item20 = row, flag++;

			}))
            if(item20!=null){if(item10.Item==item20.Item&&item10.ItemQuantity==1) return interaction.reply({ content: 'Not enough items'});};
			let item1;
			let item2;
			let result;
            let flagtwo = 0;
			lsit.forEach((row => {
				if (row.Name == k1[0]) item1 = row,flagtwo++;
				if (row.Name == k1[1]) item2 = row,flagtwo++;
			}))
            console.log(flag,flagtwo,k1.length);
			if (flag == k1.length && (flag==flagtwo)) {
				

				lsit.forEach((row => {
					if (row.IngredientF == interaction.options.getString('elements')) result = row;

				}))
                if(!(user.Furnace.cfuel>=1))return interaction.reply({ content: 'Your furnace is out of fuel'});
                if (!result)  return interaction.reply({ content: 'You sense that this might not be a good idea'});
				
                await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": k1[0] }, { $inc: { "Inventory.$.ItemQuantity": -1,"Furnace.cfuel":-1 } });
				if(k1[1])await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": k1[1] }, { $inc: { "Inventory.$.ItemQuantity": -1 } });
                await UserSchema.updateMany({UserId:interaction.user.id},{$pull:{Inventory:{ItemQuantity:0}}})

				if (await UserSchema.findOne({ UserId: interaction.user.id, "Inventory.Item": result.Name })) {
					await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": result.Name }, { $inc: { "Inventory.$.ItemQuantity": 1 } });
				}
				else await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $push: { "Inventory": { "Item": result.Name, "ItemQuantity": 1, "Desc": result.Desc, "Icon": result.Icon } } });
                let txt = '-'+k1[0]+'/n-';
                if(k1[1])txt= txt+'/n-'+k1[1];
                let smithEmb = new EmbedBuilder()
                .setTitle('Smithing result')
                .setColor('#Cf1020')
                .addFields(
                    { name: 'Items used', value: txt },
                    { name: 'Result: ', value: result.Name + ' Valued at $'+result.Price.toString() },
                )
                .setFooter({ text: `Gnome artisan: ` + txt, iconURL: interaction.user.displayAvatarURL() })
				return interaction.reply({ content: 'You have prepared a '+ result.Name });

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