// Require passport
const passport = require('passport');

module.exports = app => {
  app.get('/api/login', (req, res) => {
    res.sendFile('auth.html', { root: __dirname });
  });

  app.post('/api/login', passport.authenticate('local', { failureRedirect: '/api/youmessedup' }), (req, res) => {
		console.log('hello');
    res.send('success');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
	});
};