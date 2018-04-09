const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String,
  email: String,
  name: String,
  token: String
});

mongoose.model('users',userSchema);
