'use strict';


var ctrl = angular
	.module('app')
	.factory('forgotPass',function($http,$rootScope){
		return{
			getPass:function(user){
				var test = user;
				//console.log(test + ' - ' + test.email + ' - ');
				
				
				
					$.each(user, function(k, v) {
						console.log(k + ' is ' + v + '\n');
					});
				
				var $promise = $http.post('http://localhost:8080/forgotpassword',user);
				
				$promise.then(function(msg){
					$.each(msg, function(k, v) {
						console.log(k + ' is ' + v + '\n');
					});
					
					//if( msg.data )
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