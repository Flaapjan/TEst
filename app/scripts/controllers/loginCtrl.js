'use strict';

angular
	.module('app')
	.controller('loginCtrl3',['$scope','loginService','$rootScope', function($scope,loginService,$rootScope){
		$rootScope.headTemplate = 'templates/nav.html';
		$scope.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
		$scope.login = function(user){
			loginService.login(user); //Call login Service
		}
	}])



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
	.controller('loginCtrl', ["$scope","$rootScope", '$sce', '$http', function($scope,$rootScope, $sce, $http){
		$scope.title = 'Login';		
		$rootScope.title = 'Zaralab - Login';
		$scope.url = 'login.php';
		
		$scope.login = function() {
			$http.post($scope.url, { "username" : $scope.keyUser, "password" : $scope.keyPass }).
			success(function(data, status) {
				$scope.status = status;
				$scope.data = data;
				$scope.result = data;
				$scope.html = data;
				$scope.trustedHtml = $sce.trustAsHtml($scope.html);
				
			})
			.
			error(function(data, status) {
				$scope.data = data || "Request failed";
				$scope.status = status;			
			});
			
		};
	}]);

		