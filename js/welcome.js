var ref = new Firebase("https://forumforum.firebaseio.com");
$( document ).ready(function(){
	$('.save-email').on('submit', function(e){
		e.preventDefault();
		var auth = ref.getAuth();
		console.log(auth);
		var email = $('input[name=email]').val(); 
		var userref = ref.child("users").child(auth.auth.uid);
		userref.update({"email": email});
		window.location.href = "add_post.html";
	});
});