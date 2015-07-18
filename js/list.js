$(document).ready(function(){

	getPosts();
	
// Attach an asynchronous callback to read the data at our posts reference
});

function getPosts(){
	var ref = new Firebase("https://forumforum.firebaseio.com");
	var postref = ref.child("posts");
	postref.on("value", function(snapshot) {
		var data = snapshot.val();

		$.each(data, function(key, val){
			console.log(val.title);
		});
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
}
