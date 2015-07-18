/*$( document ).ready(function() {
	
});*/

var ref = new Firebase("https://forumforum.firebaseio.com");

var user = ref.getAuth();

if(!user){
	window.location.href = "register.html";
}

$( document ).ready(function(){
	$('body').on('click', '.logout', function(e){
		e.preventDefault();
		ref.unauth();
		window.location.href = "register.html";
	});
});
