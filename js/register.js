$(document).ready(function(){
	// global variables
	var ref = new Firebase("https://forumforum.firebaseio.com");

	$('body').on('click', '.facebook', function(e){
		e.preventDefault();
		ref.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    var userref = ref.child("users").child(authData.auth.uid);
		    var user = {
		    	"name": authData.facebook.displayName,
		    	"profile_image": authData.facebook.profileImageURL,
		    };
		    userref.set(user);
		    window.location.href = "add_post.html";

		  }
		});
	});
});

