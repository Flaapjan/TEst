'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Login', function() {

  describe('User login', function() {

    beforeEach(function() {
      browser.get('#/login');
    });

    it('should log the user in successfully', function() {

        var email = element(by.model('user.mail'));
        email.sendKeys('test@gmail.com');

        var password = element(by.model('user.pass'));
        password.sendKeys('123');

        
        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('btn-default')).click();
        expect(ptor.getCurrentUrl()).toContain('/#/'); //hmmmmmmm
        
    });
      
    it('should direct user to the forgot password page', function() {
        
    });
      
    it('should indicate incorrect password error', function() {

    });
      
    it('should direct user to the forgot password page', function() {
        
    });
      
    it('should direct user to the forgot password page', function() {

    });
 
      
  });
});

