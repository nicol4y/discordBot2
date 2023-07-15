const { model, Schema } = require('mongoose');
let shopItems = new Schema({
  name: {
    type: 'String',
    unique: true
  },
  desc: {
    type: 'String'
  },
  icon: {
    type: 'String'
  },
  durability: {
    type: 'Number'
  },
  
  Price: {
    type: 'Number',
    default: false
  },
  typeI: {
    type: 'String',
    default: '-'
  },
})
module.exports = model('shopItems', shopItems);
