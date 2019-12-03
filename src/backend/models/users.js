/* const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    //uniqness: true
  },
  firstName:{
 type: String,
   required: true,
   //uniqness: false
  },
   lastName: {
     type: String,
     required: true,
    // uniqness: false
   },
    city: {
      type: String,
      required: true,
      //uniqness: false
    },
     code: {
       type: String,
       required: true,
       //uniqness: false
     },
  password: {
    type: String,
    required: true
  },
  retype: {
    type: String,
    required: true
  }
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
 */
