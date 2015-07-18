var ref = new Firebase("https://forumforum.firebaseio.com");
$( document ).ready(function(){
	$('.save-email').on('submit', function(e){
		var email = $('input[name=email]');

		if(email.val() !== ""){
			e.preventDefault();
			var auth = ref.getAuth();
			console.log(auth);
			var userref = ref.child("users").child(auth.auth.uid);
			userref.update({"email": email.val()});
			window.location.href = "list.html";
		}else {
			alert('you need to have a value..');
		}
		
	});
});