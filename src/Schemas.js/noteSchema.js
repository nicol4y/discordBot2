const {model, Schema} = require('mongoose');

const notes = new Schema({
  name:{
    type: 'String'
    
  },
  noteID:{
    type: 'Number'
  },
Desc:{
type: 'String'
}
})
const usernote = new Schema({
    UserId: {
        type: 'String',
        unique: true
      },
      
    notes: {
     type:[notes]
    }, 
    number:{
        type: 'Number'
    }

})
module.exports = model('usernote',usernote);