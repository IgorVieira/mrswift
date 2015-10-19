
module.exports = function (app) {

  var Contact = app.models.contact;

  var controller = {}



  controller.saveContact = function(req, res) {

        var data = {

          name:req.body.name,
          email: req.body.email,
          text: req.body.text
        };

        Contact.create(data)

      .then(
        function(contact) {
          res.status(201).json(contact);
        },
        function(error) {
          console.log(error);
          res.status(500).json(error);
        }
      );

  };

  return controller;
};
