var contatoPage = function(){

  this.lookPage = function(){
    browser.get('http://localhost:3000/#/home');
  }

  this.insideName = function(name){
    element(by.model('contact.name')).sendKeys(name);
  }

  this.insideEmail = function(email){
    element(by.model('contact.email')).sendKeys(email);
  }

  this.insideText = function(text){
    element(by.model('contact.text')).sendKeys(text);
  }

  this.sendMessage = function(){
    element(by.css('[value="Enviar"]')).click();
  }

  this.getMessage = function(){
   return  element(by.binding('message.text')).getText()

  }




}

module.exports = contatoPage;
