var express =  require('express')
//	,load	= require('express-load')
	,bodyParser =  require('body-parser')
	,cookieParser = require('cookie-parser')
	,session = require('express-session')
	,helmet = require('helmet');



//Environment setup

module.exports = function(){
	
	var app = express();

		app.set('port',3000);

		app.use(express.static('./public'));		
		app.set('view engine','ejs');		
		app.set('views','./app/views');		
		// app.use(cookieParser());		
		// app.use(session(
		// 	{
		// 		secret:'Aph@lbe_Met0re',
		// 		resave:true,
		// 		saveUnitialized:true
		// 	}
		// ));

		app.use(bodyParser.urlencoded({extended:true}));
		app.use(bodyParser.json());
		app.use(require('method-override')());


		app.use(helmet());
		app.use(helmet.xframe());
		app.use(helmet.xssFilter());
		app.use(helmet.nosniff());
		app.disable('x-power-by');
		app.use(helmet.hidePoweredBy({setTo:'PHP 5.5.14'}));


		//load('models',{cwd:'app'})
		//	.then('controllers')
		//	.then('models')
		//	.then('routes')
		//	.into(app);

		// app.get('*', function(req,res){
		// 	res.status(404).render('404');
		// });

 return app;

}
