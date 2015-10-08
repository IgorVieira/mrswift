  var request = require('superagent');
  var app = require('../config/express')(app);





  describe('GET /user', ()=>{



    



   it('should respond to GET',()=>{
      request
      .get('http://localhost:'+app.get('port'))
      .end(function(res){
        expect(res.status).to.equal(200);
    })
   })


   it('You should not pass!', (done)=>{
      done();
    });   

})