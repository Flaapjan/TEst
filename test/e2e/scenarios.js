'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('User login', function() {

    beforeEach(function() {
        browser.get('#/login');
    });

    it('should log the user in successfully', function() {
        var email = element(by.model('user.emailAddress'));
        email.sendKeys('test@gmail.com');

        var password = element(by.model('user.password'));
        password.sendKeys('123');

        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('btn-default')).click();
        expect(ptor.getCurrentUrl()).toContain('/#/'); //hmmmmmmm

    });

    //needs to be updated when forgot password page has been implemented
    it('should direct user to the forgot password page', function() {
        //ptor.findElement(protractor.By.className('btn-forgot-password')).click();
        //expect(ptor.getCurrentUrl()).toContain('/#/'); 
    });

    it('should indicate incorrect credentials error due to wrong password', function() {

        var email = element(by.model('user.emailAddress'));
        email.sendKeys('test@gmail.com');

        var password = element(by.model('user.password'));
        password.sendKeys('456');

        var ptor = protractor.getInstance();
        //var emailError = ptor.findElement(protractor.By.className('.error'));
        //expect(emailError.isDisplayed().toBeTruthy());
        //emailError.getText().toMatch("Incorrect password or login email entered");

    });

    it('should indicate incorrect credentials error due to wrong email', function() {
        var email = element(by.model('user.emailAddress'));
        email.sendKeys('test324@gmail.com');

        var password = element(by.model('user.password'));
        password.sendKeys('123');

        //var ptor = protractor.getInstance();
        //var emailError = ptor.findElement(protractor.By.className('.alert .error'));
    });

    it('should redirect user to home page if he or she wishes to not log in', function() {

    });

    it('should redirect to the login page if trying to load protected page while not authenticated', function() {
        browser.get('/#/home');
        var loginURL = browser.getCurrentUrl();

        browser.get('/#/');
        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });

});

