var mongoose = require('mongoose');


module.exports = function(uri){
	mongoose.connect(uri);

	mongoose.connection.on('connected', function(){
		console.log('Mongodb is connect in: '+uri);
	});


	mongoose.connection.on('disconnect', function(){
		console.log('Mongodb is disconnect in: '+uri);
	});


	mongoose.connection.on('error', function(erro){
		console.log('Mongodb error in connection in ' +erro);
	});



	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Aplication is finnish and close mongodb')
			process.exit(0);
		})

	})
}
