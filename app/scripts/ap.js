var app = angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('home');
		
		$stateProvider
			.state('home', {
				url: '/home/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts.html',
				controller: 'contactCtrl'
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
			.state('roleMaintenance', {
				url: 'editRole',
				templateUrl: 'templates/maintenance.html',
				controller: 'loggedLanding'
			})
			.state('roleMaintenance.editRole', {
				url: 'roleMaintenance/editRole/:role',
				templateUrl: 'templates/editRole.html',
				controller: 'editRole'
			})
			
	}])
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	