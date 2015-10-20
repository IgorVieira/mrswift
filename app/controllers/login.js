module.exports = function(app){
//var bcrypt = require('bcryptjs');
//var User  =  app.models.user;
//var csrf = require('csurf');



	var controller = {}

	controller.login = function(req,res){
		res.render('admin/login');
	}

	/*
  loginController.post = function(req, res){
		User.findOne({email: req.body.email})
		.then(function(user){
			if (bcrypt.compareSync(req.body.password, user.password)) {
				req.session.user = user;
				res.redirect('/users');
			}
		})
		.catch(function(err){
			if (!user) {
			res.render('login.jade',{error: 'Email or password invalid'});
			}
		})
	}

  */

	return controller;
}
