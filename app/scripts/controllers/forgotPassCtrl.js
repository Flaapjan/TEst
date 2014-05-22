
ctrl.controller('forgotPassCtrl',['$scope', function($scope){
		$scope.title = "Forgot Password",
		
		$scope.forgotPassword = function(user){
			var $promise = $http.post('http://localhost:8000/forgotpassword',userLogin);
					
			$promise.then(function(msgLogin){
				$rootScope.errorMsg = msgLogin.data;
				if(msgLogin.data.length == 0) {
					
					
					$rootScope.loggedUser = msg.data;
					
					console.log('success login');
					$state.go("selectBilling");
				}
			});
		}
	}]) 