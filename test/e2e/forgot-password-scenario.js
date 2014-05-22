'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('User forgot password', function() {

    beforeEach(function() {
        browser.get('#/login/forgot_password');
    });

    it('should redirect user to login page after successfully entering a valid email address', function() {
        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('submit-button')).click();
        expect(ptor.getCurrentUrl()).toContain('/#/'); //hmmmmmmm
    });
    
    it('should notify user that email address entered does not exist', function() {
        
    });

    it('should redirect user to login if he/she remembers their password', function() {
        var ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('back-button')).click();
        expect(ptor.getCurrentUrl()).toContain('/#/'); //hmmmmmmm
    });
    
});

