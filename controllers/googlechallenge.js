/**
 * GET /
 * About page.
 */


exports.googlechallenge = (req, res) => {
  res.render('pages/googlechallenge', {
    title: 'Google Challenge'
  });
};
