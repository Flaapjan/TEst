'use strict';

angular
	.module('app')
	.factory('loginService',function($http,$state,$rootScope){
		return{
			login:function(userLogin){
				var $promise = $http.post('http://localhost:8080/authenticate',userLogin);
				
				$promise.then(function(msgLogin){
					if(msgLogin.data.indexOf('mail') == -1) {
						$rootScope.currentUser = userLogin;
						var $userPromise = $http.post('http://localhost:8080/login',$rootScope.currentUser);
						
						$userPromise.then(function(msg){
							$rootScope.loggedUser = msg.data;
							var $billingPromise = $http.post('http://localhost:8080/billingCompanies',msg.data);
							$rootScope.user = msg.data;
							//console.log(msg.data);
							var billingMsg;
							$billingPromise.then(function(billingMsg){
								//console.log(billingMsg.data);
								$rootScope.billingCompanies = billingMsg.data;
								$rootScope.headTemplate = 'templates/nav_log.html';
								
								if(billingMsg.data.length > 1) {
									$state.go("selectBilling");
								}
								else{
									$rootScope.billingCompanies = billingMsg.data;
									$state.go("profile");
								}
							});
						});
					}
					else{
						$rootScope.loginError = msgLogin.data;
					}
				});
			}
		}
	});
	

//	----	JSON input test data
/*
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
				
				if( userLogin.emailAddress == $rootScope.email && $rootScope.password == userLogin.password && !found ){
					console.log('You are now logged in. \nWelcome ' + $rootScope.name + ' ' + $rootScope.surname);
					found = !found;
						
					if($rootScope.company.length > 1){
						$state.go("selectBilling");
						userLogin($rootScope.codes[x]);
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
	*/ 