'use strict';

angular
	.module('app')
	.factory('loginService',function($http,$location){
		return{
			login:function(user){
				var $promise=$http.post('data/user.php',user); //send data to user.php
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
	