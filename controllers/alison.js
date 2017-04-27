/**
 * GET /
 * About page.
 */

 exports.alison = (req, res) => {
   res.render('pages/alison', {
     title: 'HTML and CSS'
   });
 };
