'use strict';

angular
	.module('app')
.directive('watchChange', function() {
		return {
			scope: {
				onchange: '&watchChange'
			},
			link: function(scope, element, attrs) {
				element.on('input', function() {
					scope.$apply(function () {
						scope.onchange();
					});
				});
			}
		};
	})
	.controller('loginCtrl3',['$scope','loginService','$rootScope', function($scope,loginService,$rootScope){
		$rootScope.headTemplate = 'templates/nav.html';
		$scope.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
		$scope.login = function(user){
			loginService.login(user); //Call login Service
		}
        $scope.title = 'Login';		
		$rootScope.title = 'Zaralab - Login';
		$scope.url = 'login.php';
	}])
	

		