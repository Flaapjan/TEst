'use strict';

var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','$rootScope','$http', function($scope, $rootScope, $http){
		//$rootScope.headTemplate = 'templates/nav.html';
		$rootScope.headTemplate = 'templates/nav_log.html';
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
		$scope.user;
		
		$scope.role = function(roleItem){
			
			if(typeof roleItem === 'undefined')
				$scope.type = "Add";
			else
				$scope.type = "Edit";
				
			
			$scope.editRole = roleItem;
		}
		$scope.cos = function(cosItem){
			
			if(typeof cosItem === 'undefined')
				$scope.type = "Add";
			else
				$scope.type = "Edit";
			
			$rootScope.cosVal = cosItem;
		}
		$scope.userValue = function(user){
			$rootScope.user.email = "1";
			$rootScope.user.password = "2";
			$rootScope.user.name = "3";
			$rootScope.user.surname = "4";
			$rootScope.user.company = "5";
			$rootScope.user.pic = "6";
			
		}
		$scope.tick = function(tickValue){
			tickValue = !tickValue;
		}
	}]);

	
ctrl.controller('roleCtrl',['$scope','$http', function($scope, $http){
		$scope.title = "Manage user Roles";
		$scope.tableTitles = ['USER ROLE','ROLE DESCRIPTION'];
		$scope.choice = 'role';
		
		$http.get('api/role.json')
		   .then(function(res){
				$scope.pagedItems = res.data; 
			});
	}])
ctrl.controller('addCos',['$scope','$http', function($scope, $http){
		
		$http.get('api/cosSettings.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
	}])
ctrl.controller('editRole',['$scope','$http', function($scope, $http){
		
		$http.get('api/roleApps.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
	}]) 
ctrl.controller('selectBilling',['$scope','$http', function($scope,$http){
		$scope.title = "Select Billing Company"
		
		$http.get('api/billingCompany.json')
		   .then(function(res){
				$scope.items = res.data;
			});
			
		$scope.logout = function(){
			$state.go("login");
		}
	}])
ctrl.controller('profileCtrl',['$scope', function($scope,$state){
		$scope.title = "User Profile";
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
			if(item.item.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});







