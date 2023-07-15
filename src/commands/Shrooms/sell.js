const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const UserSchema = require('../../Schemas.js/userSchema');
const priceSchema = require('../../Schemas.js/pricesSchema');
const shopSchema = require('../../Schemas.js/shopSchema');
const mineralSchema = require('../../Schemas.js/mineralSchema');

module.exports = {
  data: new SlashCommandBuilder().setName('sell').setDescription("Sell items from your inventory").addStringOption(option => option.setName('item').setDescription('Select an item').setRequired(true)).addIntegerOption(option => option.setName('amount').setDescription('Select a number').setRequired(true)),
  async execute(interaction) {
    let test;
    if (await UserSchema.findOne({ UserId: interaction.user.id })) {
      test = await UserSchema.findOne({ UserId: interaction.user.id });
      let itemsize = interaction.options.getString('item').split(",");
      let flag = false;
      let item;
      test.Inventory.forEach((row => {
        if (row.Item == interaction.options.getString('item') && row.ItemQuantity >= interaction.options.getInteger('amount')) {
          flag = true;
          item = row;
          return;
        };
      }));


      let price;
      if (flag) {
        price = await priceSchema.findOne({ Name: itemsize[0] });

        if (price == null) {

          price = await shopSchema.findOne({ name: itemsize[0] });
          if (price != null) price.Price = Math.floor(price.Price * 0.6);
          else {
            price = await mineralSchema.findOne({ Name: itemsize[0] });

          }
        }

        if (itemsize[1] == 'Small') {
          price.Price = Math.floor(price.Price * 0.75);
        } else if (itemsize[1] == 'Medium') {
          price.Price = Math.floor(price.Price * 1);

        } else if (itemsize[1] == 'Big') {
          price.Price = Math.floor(price.Price * 1.25);

        }
        if (itemsize[2] == 'Toasted' || itemsize[1] == 'Toasted') {
          price.Price = Math.floor(price.Price * 1.15);

        }
        let total = interaction.options.getInteger('amount') * price.Price;
        await UserSchema.findOneAndUpdate({ UserId: interaction.user.id, "Inventory.Item": item.Item }, { $inc: { "Inventory.$.ItemQuantity": -(interaction.options.getInteger('amount')) } });
        if ((item.ItemQuantity - interaction.options.getInteger('amount')) == 0) await UserSchema.findOneAndUpdate({ UserId: interaction.user.id }, { $pull: { Inventory: { Item: item.Item } } });
        await UserSchema.findOneAndUpdate({ "UserId": interaction.user.id }, { $inc: { "Dabloons": (total) } });
        return interaction.reply({ content: 'Sold for ' + total.toString() + ' dabloons' });
      }
      else {
        return interaction.reply({ content: 'Item not found/not enough items' });
      }
    }
    else {
      return interaction.reply({ content: 'First create your gnomesona with /create' });

    }
  }
}