const {model, Schema} = require('mongoose');
let prices = new Schema({
    MushId: {
        type: 'Number',
        unique: true
      },
      Name:{
        type: 'String'
      },
      Desc:{
        type: 'String'
      },
      Price:{
        type: 'Number'
      },
      Chance:{
        type: 'Number'
      },
      Poisonous:{
        type: 'Boolean'
      },
      Show:{
        type: 'String'
      },
      Icon:{
        type: 'String'
      },
bonus:{
  type:'Number'
},
Consumable:{
  type: 'Boolean'
},
IngredientF:{
  type: 'String',
default: '-'
},
IngredientS:{
  type: 'String',
default: '-'
}

})
module.exports = model('prices',prices);