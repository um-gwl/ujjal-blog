const mongoose = require('mongoose');
var uniqid = require('uniqid');

const User = mongoose.model('users');
const Posts = mongoose.model('posts');

module.exports = (app)=> {
  app.get(
    '/api/posts',
    (req,res) => {
      const _AuthToken = req.get('Authorization-token');
      User.findOne({token : _AuthToken},(err,existUser) => {
        if(existUser){
          Posts.findOne({userId : existUser._id},(err,posts) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({status:true,postList:posts}));
          });
        }
        else{
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({status:false}));
        }
      });
    }
  );
}
