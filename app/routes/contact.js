module.exports = function (app) {

  var controller = app.controllers.contact;

  app.route('/contact')

  	.post(controller.saveContact)


};
