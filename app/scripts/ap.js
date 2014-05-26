var app = angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider','$stateProvider','$httpProvider', function($urlRouterProvider,$stateProvider,$httpProvider){
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		//$urlRouterProvider.otherwise('/login');//if Cookie does not exist
		$urlRouterProvider.otherwise('/');//if Cookie exists
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('cos', {
				url: '/cos',
				templateUrl: 'templates/cos.html',
				controller: 'cosCtrl'
			})
			.state('addCos', {
				url: '/addCos',
				templateUrl: 'templates/addCos.html',
				controller: 'addCos'
			})
			.state('editCos', {
				url: '/editCos/:cos',
				templateUrl: 'templates/editCos.html',
				controller: 'editCos'
			})
			.state('roleMaintenance', {
				url: '/roleMaintenance',
				templateUrl: 'templates/maintenance.html',
				controller: 'roleCtrl'
			})
			.state('editUserRole', {
				url: '/editRole/:role',
				templateUrl: 'templates/editRole.html',
				controller: 'editRole'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('forgotPass', {
				url: '/login/forgot_password',
				templateUrl: 'templates/forgotpass.html',
				controller: 'forgotPassCtrl' 
			})
			.state('selectBilling', {
				url: '/login/selectBilling',
				templateUrl: 'templates/selectBilling.html',
				controller: 'selectBilling'
			})
			.state('logout', {
				url: '/logout',
				templateUrl: 'templates/logout.html',
				controller: 'LogoutController'
			})
			.state('profile', {
				url: '/profile/:user',
				templateUrl: 'templates/profile.html',
				controller: 'profileCtrl'
			})
	}])
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	