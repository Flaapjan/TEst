
ctrl
	.controller('cosCtrl',['$scope','$http', function($scope,$http){
		$scope.title = 'Class of Service'
		$scope.tableTitles = ['CLASS OF SERVICE'];
		$scope.choice = 'cos';
		 
		
		$http.get('api/cos.json')
			.then(function(res){ 
				$scope.pagedItems = res.data;
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
		
		/*var $promise = $http.post('api/cos.json',userLogin);
				
		$promise.then(function(msgLogin){
			$rootScope.errorMsg = msgLogin.data;
			if(msgLogin.data.length == 0) {
				$rootScope.loggedUser = msg.data;
				
				console.log('success login');
				$state.go("selectBilling");
			}
		});*/
	}])