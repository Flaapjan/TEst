angular
	.module('app')
	.controller('aboutCtrl',['$scope','$rootScope', function($scope, $rootScope){
		$rootScope.title = "Zaralab - About";
		$scope.title = 'About';
		$scope.data = ['Aenean eu tellus sed dui ultricies accumsan eget vel mi. Quisque sit amet elit dapibus, condimentum magna ac, scelerisque nibh. Nunc in rutrum est. Quisque luctus consequat sem eu pulvinar. Cras laoreet ornare risus, nec pellentesque dui tempus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat molestie fermentum. Praesent in metus eleifend, faucibus justo vitae, interdum nisl.'];
	}]);