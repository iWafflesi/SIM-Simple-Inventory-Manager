module.exports = app => {
	app.get('/test', (req, res) => {
		console.log('hello');
	})
}