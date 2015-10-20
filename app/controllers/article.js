
module.exports = function(app){



	var Article = app.models.article;

	var controller = {};

	controller.listArticles = function(req,res){
			Article.find().exec()
				.then(
					function(articles){
						res.json(articles);
				},
				function(erro){
					console.error(erro)
					res.status(500).json(erro);
				}
		);
	};


  controller.getArticle = function(req, res){
    var _id = req.params.id;
    Article.findById(_id).exec()
    .then(
      function(article){
        if (!article) throw new Error("CONTATO NÃO encontrado");
        res.json(article)
      },
      function(erro){
        console.log(erro);
        res.status(404).json(erro);
      }
    );
  };


	return controller;
}
