angular
	.module("app")
	.controller("contactCtrl", ["$scope","$rootScope", function($scope,$rootScope){
		$scope.title = "Contact";
		$rootScope.title = "Zaralab - Contact";
	}]);