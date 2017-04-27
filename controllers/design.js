/**
 * GET /
 * About page.
 */

exports.design = (req, res) => {
  res.render('pages/design', {
    title: 'Design'
  });
};
