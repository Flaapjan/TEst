<?php
	$user=json_decode(file_get_contents('php://input'));
	if($user->mail=='test@gmail.com' && $user->pass=='123'){
		print 'success';
	}else{
		print 'error';
	}
?>