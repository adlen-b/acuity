/**
 * GET /
 * Home page.
 */

 const User = require('../models/User');


  exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/home');
  };

 exports.index = (req, res) => {
    if (req.isAuthenticated())  {
   res.render('homeback', {
     title: 'Home',
   })
 } else  {
     res.render('home', {
       title: 'Home'
     })
   }
  }
