var ContactPage = new require('./page/contactPage.js')

describe('Enter contact', function(){

  var page = new ContactPage();

  beforeEach(function(){
    page.lookPage();
  })

  it('Enter a menssage', function(){
    var randomUser = Math.floor((Math.random()*10000000)+1);

    page.insideName('test'+randomUser);
    page.insideEmail('test@'+randomUser+'.com');
    page.insideText('I am user number:'+ randomUser);
    page.sendMessage();
    expect(page.getMessage()).toContain('Recebemos sua mensgem =]');



  })
})
