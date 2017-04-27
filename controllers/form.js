/**
 * GET /
 * About page.
 */

 exports.isAuthenticated = (req, res, next) => {
   if (req.isAuthenticated()) {
     return next();
   }
   res.redirect('/login');
 };

exports.form = (req, res) => {
  res.render('pages/form', {
    title: 'form'
  });
};
