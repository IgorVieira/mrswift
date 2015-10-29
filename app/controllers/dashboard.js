module.exports = function(app){
	var User = app.models.user;
	var controller = {}

	controller.dashboard = function(req,res){
		if(req.session && req.session.user){
			User.findOne({email:req.session.user.email}, function(err, user){
				if(!user){
					req.session.destroy();
					res.redirect('/login',{error:' Error man :/'})
				}else{
					res.locals.user = user;
					res.render('admin/dashboard')
				}
			})
		}else {
			res.redirect('/login')
		}
	}

	return controller;
}
