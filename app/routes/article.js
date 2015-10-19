module.exports = function(app) {
  var controller = app.controllers.article;

  app.get('/articles', controller.listArticles);
  app.get('/articles/:id', controller.getArticle);
};
