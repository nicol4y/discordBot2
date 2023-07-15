const {model, Schema} = require('mongoose');
const userInventory = new Schema({
    Item:{
      type: 'String'
      
    },
    ItemQuantity:{
      type: 'Number'
    },
    ItemId:{
      type: 'Number'
    },
Desc:{
  type: 'String'
},Icon:{
  type: 'String'
}

})

const user = new Schema({
    UserId: {
        type: 'String',
        unique: true
      },
      Gname:{
        type: 'String'
      },
      Avatar:{
        type: 'String'
      },
      Dabloons:{
        type: 'Number'
      },
      Status:{
        type: 'String'
      },
      Bonus:{
type: 'Number',
default: 0
      },
      mice:{
        type: 'Boolean',
        default: false
              },
      Inventory :{
     type: [userInventory]
     
    },
    Bags: {
      name: { type: String },
      amount: { type: Number },
      desc:{type: String}
    },
    Rod: {
      name: { type: String ,default: '-'},
      durability: { type: Number , default: 0},
      desc:{type: String, default: '-'} 
    },
    Pick: {
      name: { type: String ,default: '-'},
      durability: { type: Number , default: 0},
      desc:{type: String, default: '-'} 
    },
    Furnace: {
      name: { type: String ,default: '-'},
      cfuel: { type: Number , default: 0},
      mfuel: { type: Number , default: 10},
      desc:{type: String, default: '-'} 
    },
    Badges:{
      name: { type: String },
      amount: { type: Number },
      desc:{type: String}
    }

})
module.exports = model('user',user);