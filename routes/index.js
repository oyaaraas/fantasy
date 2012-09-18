
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'dgrid, JsonRestStore and Paging example' });
};