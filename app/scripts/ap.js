var app = angular
	.module('app', [
		'ui.router'
	]/*, function($routeProvider) {
		$routeProvider
			.when('/roleMaintenance', {
				templateUrl: 'templates/maintenance.html',
				controller: 'loggedLanding'
			}).otherwise('/');
	}*/)
	.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		
		//$routeProvider
		
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
			.state('roleMaintenance', {
				url: '/roleMaintenance',
				templateUrl: 'templates/maintenance.html',
				controller: 'loggedLanding'
			})
			.state('roleMaintenance.editRole', {
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
			


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	