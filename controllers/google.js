/**
 * GET /
 * About page.
 */


exports.google = (req, res) => {
  res.render('pages/google', {
    title: 'Google Suit'
  });
};
