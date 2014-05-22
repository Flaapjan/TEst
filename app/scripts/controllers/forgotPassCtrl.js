
ctrl.controller('forgotPassCtrl',['$scope', function($scope){
		$scope.title = "Forgot Password",
		
		var $promise = $http.post('http://localhost:8000/authenticate',userLogin);
				
				$promise.then(function(msgLogin){
					$rootScope.errorMsg = msgLogin.data;
					if(msgLogin.data.length == 0) {
						
						var $userPromise = $http.post('http://localhost:8000/login',userLogin);
						
						$userPromise.then(function(msg){
							$rootScope.loggedUser = msg.data;
							
							console.log('success login');
							$state.go("selectBilling");
						});
					}
				});
	}])