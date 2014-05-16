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