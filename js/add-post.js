$( document ).ready(function() {
	var ref = new Firebase("https://forumforum.firebaseio.com/");
	var tagsRef = ref.child("tags");
	var postsRef = ref.child("posts");

	ref.on("child_added", function(snapshot, prevChildKey) {
	  var tag = snapshot.val();
		$.each( tag, function( key, value ) {
			console.log(value.name)
			$(".checkbox").append('<label><input type="checkbox">' + value.name + '</label><br>');
		});
	});

	$("form").submit(function (e) {
      e.preventDefault();
      console.log($("#email").val());
      console.log($("#body").val());

      	postsRef.push({
			title: $("#title").val(),
			body: $("#body").val(),
			created_at: Firebase.ServerValue.TIMESTAMP
		});
    })
		  
});