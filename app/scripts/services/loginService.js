'use strict';

angular
	.module('app')
	.factory('loginService',function($http,$location,$state,$rootScope){
		
	
		
		return{
			login:function(user){
				var found = false;
				
				$http.get('api/loginData.json')
				   .then(function(res){
						$rootScope.codes = res.data;
						//console.log($rootScope.codes + '\n' + $rootScope.codes[0] + '\n' + $rootScope.codes[0]['name']);
						
						for( var x = 0; x < $rootScope.codes.length; x++ ){
							$rootScope.email = $rootScope.codes[x]['email'];
							$rootScope.password = $rootScope.codes[x]['password'];
							$rootScope.name = $rootScope.codes[x]['name'];
							$rootScope.surname = $rootScope.codes[x]['surname'];
							$rootScope.company = $rootScope.codes[x]['company'];
							$rootScope.pic = $rootScope.codes[x]['pic'];
							
							if( user.emailAddress == $rootScope.email && $rootScope.password == user.password && !found ){
								console.log('You are now logged in. \nWelcome ' + $rootScope.name + ' ' + $rootScope.surname);
								found = !found;
									
								if($rootScope.company.length > 1){
									$state.go("selectBilling");
									user($rootScope.codes[x]);
								}
								else{
									$state.go("profile");
								}
								$rootScope.headTemplate = 'templates/nav_log.html';
							}
							else if(!found){
								console.log('Incorrect email/password combination');
							}
						}
						
						
					});
				
				
				
				//console.log(user.emailAddress + ' - ' + user.password + ' - ' + user);
				/*var $promise = $http.post('http://localhost:8080/login',user); //send data to user.php
				
				$promise.then(function(msg){
					
					
					if(msg !== null) {
						console.log('success login');
						$state.go("selectBilling");
						$('#logInOut').removeAttr('ui-sref-active').html("<a ui-sref='logout' href='#/logout'>Logout</a>");
					}else{
						console.log('error login - ' + msg.data );
					}
				});*/
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
	