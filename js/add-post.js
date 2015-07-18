$( document ).ready(function() {
	var ref = new Firebase("https://forumforum.firebaseio.com/");
	var tagsRef = ref.child("tags");
	var postsRef = ref.child("posts");

	tagsRef.on("child_added", function(snapshot, prevChildKey) {
		var tag = snapshot.val();
	  	$(".checkbox").append('<label><input type="checkbox">' + tag.name + '</label><br>');
	});

	$("form").submit(function (e) {
	  	e.preventDefault();
	  	if(ref.getAuth()) {
			postsRef.push({
				title: $("#title").val(),
				body: $("#body").val(),
				user_id: ref.getAuth().uid,
				created_at: Firebase.ServerValue.TIMESTAMP
			});
		} else {
			alert('You need to be logged in.')
		}

		window.location.href = "/"
	})

});