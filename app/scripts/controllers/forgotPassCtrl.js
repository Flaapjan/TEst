'use strict';


var ctrl = angular
	.module('app')
	.factory('forgotPass',function($http,$rootScope){
		return{
			getPass:function(user){				
				var $promise = $http.post('http://localhost:8080/forgotpassword',user);
				
				$promise.then(function(msg){					
					$rootScope.Password = msg.data;
					console.log('Forgot Password: ' + msg);
				});
			}
		}
	});

ctrl.controller('forgotPassCtrl',['$scope','forgotPass', function($scope,forgotPass){
		$scope.title = "Forgot Password",
		$scope.getPass = function(){
			forgotPass.getPass($scope.user);
		};
	}])