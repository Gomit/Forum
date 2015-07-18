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
		    userref.update(user);
		    
		    userref.on('value', function(snapshot) {
		    	var email = snapshot.val().email;
		    	if (email) {
		    		window.location.href = "index.html";
		    	}else {
		    		window.location.href = "welcome.html";
		    	}
		    });
		  }
		});
	});
});

