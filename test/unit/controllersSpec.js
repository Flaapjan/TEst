'use strict';

describe('LoginCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        
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

});

describe('ForgotPassCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        
        scope = $rootScope.$new();
        ctrl = $controller('forgotPassCtrl', {$scope: scope});
    })); 
    
    it('Forgot password controller should be defined', function() {
        expect(ctrl).toBeDefined();
    });
});

describe('CosCtrl', function() {
    var scope, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        
        scope = $rootScope.$new();
    })); 
    
    it('Class of service controller should be defined', inject(function($controller) {
        var cosController = $controller('cosCtrl', {$scope: scope});
        expect(cosController).toBeDefined();
    }));
    
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
});
