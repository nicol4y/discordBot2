const { model, Schema } = require('mongoose');
let minerals = new Schema({
  MinId: {
    type: 'Number',
    unique: true
  },
  Name: {
    type: 'String'
  },
  Desc: {
    type: 'String'
  },
  Price: {
    type: 'Number'
  },
  Chance: {
    type: 'Number'
  },
  Show: {
    type: 'String'
  },
  Icon: {
    type: 'String'
  },
  Equipable: {
    type: 'Boolean'
  },
  IngredientF: {
    type: 'String',
    default: '-'
  }


})
module.exports = model('minerals', minerals);