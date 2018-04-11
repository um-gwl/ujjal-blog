const mongoose = require('mongoose');
const {Schema} = mongoose;

const postsSchema = new Schema({
  userId: String,
  title: String,
  category: String,
  description: String,
  posts_file_path: String
});

mongoose.model('posts',postsSchema);
