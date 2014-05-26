'use strict';

describe('LoginCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        
        //$httpBackend = _$httpBackend_;
        //$httpBackend.expectGET('http://localhost:8000/authenticate').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        
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

describe('ForgotPassCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        
        //$httpBackend = _$httpBackend_;
        //$httpBackend.expectGET('http://localhost:8000/authenticate').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        
        scope = $rootScope.$new();
        ctrl = $controller('forgotPassCtrl', {$scope: scope});
    })); 
    
    it('Forgot password controller should be defined', function() {
        expect(ctrl).toBeDefined();
    }); 
    
    it('Forgot password method should be defined', function() {
        expect(ctrl.forgotPassword).not.toBe(null);
    });
    
    
});

describe('BillingCompanyCtrl',function(){
	var scope, ctrl, $httpBackend;
	
	beforeEach(module('app'));
	
	beforeEach(inject(function($controller){
		$controller("selectBilling");
	}))
	
	describe("selectBilling",function(){
		it("should show a list of compaies linked to user",function(){
			
			
		})
	})
})

