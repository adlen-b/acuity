/**
 * GET /
 * About page.
 */

const User = require('../models/User');


 exports.isAuthenticated = (req, res, next) => {
   if (req.isAuthenticated()) {
     return next();
   }
   res.redirect('/login');
 };

exports.path1 = (req, res) => {
   if (req.user.profile.career === "software development") {
  res.render('paths/software', {
    title: 'Software Development',
  })
} else if (req.user.profile.career === "digital marketing") {
    res.render('paths/digital', {
      title: 'Digital Marketing'
    })
  } else if (req.user.profile.career === "web development") {
      res.render('paths/pathwebdev', {
        title: 'Web Development'
      })
    }
    else if (req.user.profile.career === "web design") {
        res.render('paths/pathwebdes', {
          title: 'Web Design'
        })
      }
      else if (req.user.profile.career === "business foundation") {
          res.render('paths/business', {
            title: 'Business Foundation'
          })
        }
        else if (req.user.profile.career === "entrepreneurship") {
            res.render('paths/entrepreneurship', {
              title: 'Entrepreneurship'
            })
          }
          else if (req.user.profile.career === "project management") {
              res.render('paths/management', {
                title: 'Project Management'
              })
            }
 }
