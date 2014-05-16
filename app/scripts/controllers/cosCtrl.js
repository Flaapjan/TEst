
ctrl
	.controller('cosCtrl',['$scope','$http', function($scope,$http){
		$scope.title = 'Class of Service'
		$scope.tableTitles = ['CLASS OF SERVICE'];
		
		$http.get('api/cos.json')
			.then(function(res){ 
				$scope.pagedItems = res.data;
			});
	}]);