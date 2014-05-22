function LogoutController($location,$rootScope) {
    //Session.clear();
    $location.path('/login');
	$rootScope.headTemplate = 'templates/nav.html';
	$rootScope.loggedUser = "";
	//$('input').value(''); 
} 