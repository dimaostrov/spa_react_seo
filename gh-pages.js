var ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  if (err) return err;
  console.log('upload to gh-pages complete')
});