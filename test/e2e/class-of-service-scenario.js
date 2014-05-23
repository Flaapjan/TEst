'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('User views class of services', function() {

    beforeEach(function() {
        browser.get('#/cos');
    });

    it('should show correct results when admin enters existing class of service', function() {
        var cosList = element.all(by.repeater('item in pagedItems'));
        var query = element(by.model('searchString'));
        
        expect(cosList.count()).toBe(3);

        query.sendKeys('service 2');
        expect(cosList.count()).toBe(1);

        query.clear();
        query.sendKeys('class of service 3');
        expect(cosList.count()).toBe(1);
    });
    
    it('should show correct results when admin enters non-existing class of service', function() {
        var cosList = element.all(by.repeater('item in pagedItems'));
        var query = element(by.model('searchString'));
        
        expect(cosList.count()).toBe(3);

        query.sendKeys('dfsfdsdf');
        expect(cosList.count()).toBe(0);
    });

});

