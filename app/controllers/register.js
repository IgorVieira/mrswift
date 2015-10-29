module.exports =  function(app){
	var bcrypt = require('bcryptjs');
	var User = app.models.user;

	var controller = {};

	controller.register = function(req,res){
		res.render('admin/register');
	}

	controller.registerUser = function (req,res) {
		var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		var data = {
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				email:req.body.email,
				password:hash,
			}

		User.create(data)
		.then(
			function(user){
				res.redirect('/dashboard')

			}
			,function(erro){
				console.error(erro)
				res.render('admin/register',{error:'Usuário registrado com esse email!'})

			}
		);


	}


	return controller;
}
