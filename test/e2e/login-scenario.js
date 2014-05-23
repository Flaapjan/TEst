'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('User login', function() {

    beforeEach(function() {
        browser.get('#/login');
    });

    it('should log the user in successfully', function() {
        var email = element(by.model('userLogin.emailAddress'));
        email.sendKeys('med@email.com');

        var password = element(by.model('userLogin.password'));
        password.sendKeys('password');

        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('btn-default')).click();
        expect(ptor.getCurrentUrl()).toContain('/#/'); //hmmmmmmm

    });

    it('should direct user to the forgot password page', function() {
        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('forgotPass-btn')).click().then(function(){
            browser.waitForAngular();
            expect(ptor.getCurrentUrl()).toContain('/#/login/forgot_password'); 
        });
        
    });
    
    //TO-DO: complete
    /*it('should indicate incorrect credentials error due to email and password being wrong', function() {
        
        
    });*/

    //TO-DO: complete
    it('should indicate incorrect credentials error due to wrong password', function() {

        var email = element(by.model('userLogin.emailAddress'));
        email.sendKeys('med@email.com');

        var password = element(by.model('userLogin.password'));
        password.sendKeys('456');

        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('btn-default')).click().then(function(){
            browser.waitForAngular();
            //var errorMessage = browser.findElement(by.css('.error-message'));
            //var errorMessage = element(by.model('errorMsg'))
            //expect(errorMessage.toMatch('Incorrect password or login email entered'));
            //expect(element(by.binding('errorMsg')).getText().toMatch('Incorrect password or login email entered'));
            //var errorMessage = element(by.binding('errorMsg')).getText();
        });
    });

    //TO-DO: complete
    /*it('should indicate incorrect credentials error due to wrong email', function() {
        var email = element(by.model('userLogin.emailAddress'));
        email.sendKeys('test324@gmail.com');

        var password = element(by.model('userLogin.password'));
        password.sendKeys('123');

        var ptor = protractor.getInstance();
        var emailError = ptor.findElement(protractor.By.className('error-message'));
    });*/

    it('should redirect user to home page if he or she wishes to not log in', function() {

    });

    it('should redirect to the login page if trying to load protected page while not authenticated', function() {
        browser.get('/#/home');
        var loginURL = browser.getCurrentUrl();

        browser.get('/#/');
        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });

});

