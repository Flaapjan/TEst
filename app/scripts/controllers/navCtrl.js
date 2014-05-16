//<a ui-sref='login'>Login</a>

angular
	.module('app')
	.controller('navCtrl',function($scope,$sce){
		$scope.html = "Login";
		$scope.logInOut = $sce.trustAsHtml($scope.html);
	})