'use strict';

angular
	.module('app')
	.factory('loginService',function($http,$location){
		return{
			login:function(user){
				
				//var $promise = $http.post('http://localhost:8080/login',user); //send data to user.php
				
				var $promise = $http({
					url: 'http://192.168.1.136:8080/login',
					method: 'POST',
					data: user,
					transformRequest: false,
					headers: {
						'Authorization': 'Basic dGVzdDp0ZXN0',
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				});
				
				$promise.then(function(msg){
					if(msg.data=='success'){
						console.log('success login');
						$location.path("templates/home.html");
						$('#logInOut').removeAttr('ui-sref-active').html("<a ui-sref='logout' href='#/logout'>Logout</a>");
					}else{
						console.log('error login - ' + msg.data );
					}
				});
			}
		}
	});
	
function finalLogin(user){
	angular
		.module('app')
		.controller('loginCtrl',['$scope', function($scope){
			$scope.title = "Welcome " + user;
		}])
		
}
	