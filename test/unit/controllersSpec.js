'use strict';

describe('LoginCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $controller) {
      
      scope = $rootScope.$new();
      ctrl = $controller('loginCtrl', {$scope: scope});
    })); 
    
    it('Login controller should be defined', function() {
        expect(ctrl).toBeDefined();
    }); 
    
    it('Login service should be defined', inject(['loginService',
        function(loginService) {
        expect(loginService).toBeDefined();
    }]));
    
    it('Login method should be defined', inject(['loginService',
        function(loginService) {
        expect(loginService.login).not.toBe(null);
    }]));
});
