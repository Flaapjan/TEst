var app = angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		
		$urlRouterProvider.otherwise('/');
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
			.state('editRole', {
				url: '/editRole/:role',
				templateUrl: 'templates/editRole.html',
				controller: 'editRole'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('logout', {
				url: '/logout',
				templateUrl: 'templates/logout.html',
				controller: 'LogoutController'
			})
	}])
			


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	