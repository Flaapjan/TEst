'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('User views, creates, deletes and edits user roles', function() {

    beforeEach(function() {
        browser.get('#/roleMaintenance');
    });

    it('should filter the user roles correctly based on search', function() {
        var userRoleList = element.all(by.repeater('item in pagedItems'));
        var query = element(by.model('searchString'));
        
        expect(userRoleList.count()).toBe(5);

        query.sendKeys('sys');
        expect(userRoleList.count()).toBe(1);

        query.clear();
        query.sendKeys('adm');
        expect(userRoleList.count()).toBe(2);
    });

    it('should not show user role AGENT when search value is AGGENT', function() {
        var userRoleList = element.all(by.repeater('item in pagedItems'));
        var query = element(by.model('searchString'));
        
        expect(userRoleList.count()).toBe(5);
        
        query.sendKeys('AGGENT');
        expect(userRoleList.count()).toBe(0);
        
        //TO DO: test for message showing no results
    });
    
    it('should show no results if user searches for a non-existing user role', function() {
        var userRoleList = element.all(by.repeater('item in pagedItems'));
        var query = element(by.model('searchString'));
        
        expect(userRoleList.count()).toBe(5);
        
        query.sendKeys('gjfjhf');
        expect(userRoleList.count()).toBe(0);
    });
});

