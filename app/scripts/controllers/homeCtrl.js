'use strict';

var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','$rootScope','$http', function($scope, $rootScope, $http){
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
		
		$scope.role = function(roleItem){
			$scope.item = roleItem.item;
			$scope.roleDesc = roleItem.roleDesc;
		}
	}]);

	
ctrl.controller('loggedLanding',['$scope','$http', function($scope, $http){
		$scope.title = "Manage user Roles";
		$scope.tableTitles = ['USER ROLE','ROLE DESCRIPTION'];
		
		$http.get('api/role.json')
		   .then(function(res){
				$scope.pagedItems = res.data; 
			});
	}])
	
ctrl.controller('editRole',['$scope','$http','$stateParams', function($scope, $http, $stateParams){
		
		$http.get('api/roleApps.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
	}])


// Create the instant search filter
ctrl.filter('searchFor', function(){
	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){
			if(item.userRole.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});







