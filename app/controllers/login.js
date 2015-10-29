module.exports =  function(app){
	var bcrypt = require('bcryptjs');
	var User = app.models.user;


	var controller = {}

	controller.login = function(req,res){
		res.render('admin/login')
	}

	controller.loginUser = function(req,res){
		User.findOne({email:req.body.email}, function(err,user){
			if (!user) {
				res.render('admin/login',{error:'Email ou senha inváldos'})
			}else{
				if(bcrypt.compareSync(req.body.password, user.password)){
					req.session.user = user;
					res.redirect('/dashboard')
				}else{
					res.render('admin/login',{error:'Email ou senha inváldos'})
				}
			}
		})
	}

	return controller;

}
