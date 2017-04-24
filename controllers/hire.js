/**
 * GET /
 * About page.
 */

exports.hire = (req, res) => {
  res.render('pages/hire', {
    title: 'Hire'
  });
};
