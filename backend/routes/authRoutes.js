const mongoose = require('mongoose');
var uniqid = require('uniqid');

const User = mongoose.model('users');

module.exports = (app)=> {
  app.post(
    '/api/google/signup', (req,res) => {
      const userData = req.body;
      var loggedInUser = [];
      User.findOne({googleID : userData.googleID},(err,existUser) => {
        if(existUser){
          const token = uniqid();
          User.update({_id:existUser.id},{token:token},false,(err,response)=>{
            if(response.n){
              const responseUser = {
                name:existUser.name,
                token:token
              };
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify(responseUser));
            }
            else{
              const responseUser = {
                name:existUser.name,
                token:null
              }
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify(responseUser));
            }
          });
        }
        else{
          const token = uniqid();
          new User(
            {
              googleID:userData.googleID,
              email:userData.email,
              name:userData.name,
              token:token
            }
          ).save().then(user => {
            if(user){
              const responseUser = {
                name:user.name,
                token:token
              };
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify(responseUser));
            }
            else{
              const responseUser = {
                name:user.name,
                token:null
              };
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify(responseUser));
            }
          });
        }
      });
    }
  );

  app.get(
    '/',
    (req,res) => {
      res.send("Hi wlcome to gwl orm");
    }
  );

  app.get(
    '/auth/check',
    (req,res) => {
      const _AuthToken = req.get('Authorization-token');
      User.findOne({token : _AuthToken},(err,existUser) => {
        if(existUser){
          res.setHeader('Content-Type', 'application/json');
          const responseData = {
            name:existUser.name,
            email:existUser.email
          };
          res.send(JSON.stringify({status:true,user:responseData}));
        }
        else{
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({status:false}));
        }
      });

  })

  app.get(
    '/api/logout',
    (req,res) => {
      const _AuthToken = req.get('Authorization-token');
      User.findOne({token : _AuthToken},(err,existUser) => {
        if(existUser){
          User.update({_id:existUser.id},{token:null},false,(err,response)=>{
            if(response.n){
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify({status:true}));
            }
            else{
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify({status:false}));
            }
          })
        }
        else{
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({status:false}));
        }
      });

  })
}
