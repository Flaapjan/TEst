angular
	.module('app')
	.factory('Login',function(){
		return {
			get:function(){
				return [
					{ "username":"test1", "password":"123", "name":"Phillip-Juan", "surname":"van der Berg", "isSpecial":false },
					{ "username":"test2", "password":"456", "name":"Sarah", "surname":"Labuschagne", "isSpecial":false }
				]
			}
		}
	})