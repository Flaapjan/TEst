function LogoutController($location) {
    //Session.clear();
    $location.path('/home');
	$('#logInOut').removeAttr('ui-sref-active').html("<a ui-sref='login' href='#/login'>Login</a>");
}