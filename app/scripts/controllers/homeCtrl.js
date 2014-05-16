'use strict';

var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','$rootScope','$http', function($scope, $rootScope, $http){
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
		
		$scope.role = function(roleItem){
			$scope.userRole = roleItem.userRole;
			$scope.roleDesc = roleItem.roleDesc;
		}
	}]);

	
angular
	.module('app')
	.controller('loggedLanding',['$scope','$http', function($scope, $http){
		$scope.title = "Maintenance";
		
		$http.get('api/role.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
	}])
	
angular
	.module('app')
	.controller('editRole',['$scope','$http','$stateParams', function($scope, $http, $stateParams){
		
		$http.get('api/roleApps.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
	}])










