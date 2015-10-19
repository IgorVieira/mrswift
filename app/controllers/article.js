 var articles = [ 
   {    
       _id: 1,    
       title:'Uns jovens que resolveram empreender', 
       text:'Jean shorts four dollar toast Neutra, tofu ethical keytar gentrify skateboard. Tilde try-hard cronut cardigan. Food truck organic meggings pork belly, umami migas gastropub Etsy. Bitters hashtag listicle, Intelligentsia pour-over plaid tote bag narwhal Carles sriracha Austin mumblecore freegan twee. Tote bag four loko you probably havent heard of them banjo irony Godard distillery, listicle deep v blog bicycle rights 90s. Meggings tote bag Echo Park, vegan brunch taxidermy flexitarian pug. Bicycle rights lumbersexual disrupt, tattooed next level blog organic mustache gentrify Pitchfork whatever irony sustainable iPhone.',    
      author: 'Autor Exemplo 1', 
       data:'09/10/2015'   
       
     },      
  {    
      _id: 2,    
       title:'Solucoes com qualidade acima de tudo', 
      text:'Jean shorts four dollar toast Neutra, tofu ethical keytar gentrify skateboard. Tilde try-hard cronut cardigan. Food truck organic meggings pork belly, umami migas gastropub Etsy. Bitters hashtag listicle, Intelligentsia pour-over plaid tote bag narwhal Carles sriracha Austin mumblecore freegan twee. Tote bag four loko you probably havent heard of them banjo irony Godard distillery, listicle deep v blog bicycle rights 90s. Meggings tote bag Echo Park, vegan brunch taxidermy flexitarian pug. Bicycle rights lumbersexual disrupt, tattooed next level blog organic mustache gentrify Pitchfork whatever irony sustainable iPhone.',    
       author: 'Autor Exemplo 2',   
       data:'10/10/2015'    
         
     },   
   {    
       _id: 3,    
      title:'De clientes a parceiros',   
       text:'Jean shorts four dollar toast Neutra, tofu ethical keytar gentrify skateboard. Tilde try-hard cronut cardigan. Food truck organic meggings pork belly, umami migas gastropub Etsy. Bitters hashtag listicle, Intelligentsia pour-over plaid tote bag narwhal Carles sriracha Austin mumblecore freegan twee. Tote bag four loko you probably havent heard of them banjo irony Godard distillery, listicle deep v blog bicycle rights 90s. Meggings tote bag Echo Park, vegan brunch taxidermy flexitarian pug. Bicycle rights lumbersexual disrupt, tattooed next level blog organic mustache gentrify Pitchfork whatever irony sustainable iPhone.',    
       author: 'Autor Exemplo 3',   
       data:'13/10/2015'    
        
     }    
 ];

module.exports = function() {
  var controller = {};
  




  controller.listArticles = function(req, res) {
      res.json(articles);
  };





  controller.getArticle = function(req, res) {
    var idArticle = req.params.id;
    var article = articles.filter(function(article) {
      return article._id == idArticle;
    })[0];
    article ? 
    res.json(article) : 
    res.status(404).send('Artigo não encontrado');
  };






  return controller;
};
