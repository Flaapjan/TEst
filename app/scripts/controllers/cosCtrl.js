
var ctrl = angular.
	module('app')
	.controller('cosCtrl',['$scope','$http','$rootScope', function($scope,$http,$rootScope){
		$scope.title = 'Class of Service'
		$scope.tableTitles = ['CLASS OF SERVICE'];
		$scope.choice = 'cos';
		//console.log($rootScope.user);
		
		var $promise = $http.post('http://localhost:8080/getallclassofservice',$rootScope.currentUser);
		
		$promise.then(function(msg){
			$scope.pagedItems = msg.data;
			console.log(msg);
		});
		
	}]); 

ctrl.controller('editCos',['$scope','$http', function($scope, $http){
		
		$http.get('api/cosSettings.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
			});
			
			
		
			
		$scope.addPost = function(cosName,internationalCalls){
			
			$scope.pagedItems.push({"InternalCalls": internationalCalls});
			console.log(cosName + ' - ' + internationalCalls);
		};
		
	}])