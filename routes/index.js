const express = require('express');
const router = express.Router();

const emailid="reshma@gmail.com";
const passwordId="12345";

router.get('/',function(req,res,next){
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
  let user=req.session.user;
  if(user){
    res.redirect('/homepage')
  }
  else
  {
    res.render('index');
  }
});

router.post('/home',function(req,res){
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  const userData={email,password}=req.body;
  if(emailid===email && passwordId===password){
    req.session.loggedIn=true;
    req.session.user=userData;
    
    res.redirect('/homepage')
  }
  else if(emailid!=email )
  {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('index', { error1: 'Incorrect Username' })
  }
  else if(passwordId!=password )
  {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('index', { error2: 'Incorrect Password' })
  }
});

router.get('/homepage',function(req,res) {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  let user=req.session.user
  if (user) {
  
  res.render('home')
  }else{
    res.redirect('/');
  }
})

router.get('/logout',function(req, res) {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  console.log(req.cookies);
  res.clearCookie('emailId');
  res.clearCookie('passwordId');
  console.log(req.session);
  req.session.destroy();
  res.redirect('/');
  });

module.exports = router; 
