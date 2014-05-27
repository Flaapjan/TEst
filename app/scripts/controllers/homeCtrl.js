'use strict';

var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','$rootScope','$http','$state', function($scope, $rootScope, $http,$state){
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
ctrl.controller('selectBilling',['$scope','$http','$rootScope', function($scope,$http,$rootScope){
		$scope.title = "Select Billing Company"
		
		$scope.items = $rootScope.billingCompanies;
		$scope.loggedCompany =  $rootScope.billingCompanies;
		//console.log($scope.loggedCompany);
		$scope.setCompany = function(val1){
			$rootScope.comp = $scope.myOption;
			
			$('#btnSelectBillingCompany').removeAttr('disabled');
		}
	}])
ctrl.controller('profileCtrl',['$scope','$rootScope','$state','$compile', function($scope,$rootScope,$state,$compile){
		$scope.title = "User Profile";
		
		if( !$rootScope.user){
			$state.go("login");
		}
		else if( $rootScope.loggedUser.userRole.description == 'System Administrator' ){
			$('#profileType').attr('sysadmin-directive');
			$('#profileType').html('Call template home.html');
			//console.log('system admin');
		}
		else{
			$('#profileType').html("Not system admin");
		}
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







