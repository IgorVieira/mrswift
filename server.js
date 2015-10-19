var http = require('http')
	, app =  require('./config/express')(app);
	require('./config/database.js')('mongodb://localhost/mrswift')

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server is running in port:%d', app.get('port'));
});
