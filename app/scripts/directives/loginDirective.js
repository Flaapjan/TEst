'use strict';

angular
	.module('app')
	.directive('loginDirective',function(){
	return{
		templateUrl:'partials/tpl/login.tpl.html'
	}
});
angular
	.module('app')
	.directive('homeDirective',function(){
	return{
		templateUrl:'partials/tpl/landing.tpl.html'
	}
});
angular
	.module('app')
	.directive('maintDirective',function(){
	return{
		templateUrl:'partials/tpl/viewDataMain.tpl.html'
	}
});

angular
	.module('app')
	.directive('cosDirective',function(){
	return{
		templateUrl:'partials/tpl/viewDataCos.tpl.html'
	}
});
