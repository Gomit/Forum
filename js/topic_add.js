$( document ).ready(function() {
	alert('sdasdas');
	var ref = new Firebase("https://forumforum.firebaseio.com/");
	var tagsRef = ref.child("tags");
	var postsRef = ref.child("topics");

	tagsRef.on("child_added", function(snapshot, prevChildKey) {
		var tag = snapshot.val();
	  	$(".checkbox").append('<label><input type="checkbox">' + tag.name + '</label><br>');
	});

	$("form").submit(function (e) {
	  	e.preventDefault();
	  	if(ref.getAuth()) {
			/*postsRef.push({
				title: $("#title").val(),
				body: $("#body").val(),
				user_id: ref.getAuth().uid,
				created_at: Firebase.ServerValue.TIMESTAMP,
				".priority": "asdadasda"
			});*/

			var fredRef = new Firebase('https://forumforum.firebaseio.com/topics/8k3jsdfdsfkls');
			var user = {
			name: {
			first: 'Fred',
			last: 'Flintstone'
			},
			rank: 1000
			};
			fredRef.setWithPriority(user, 1000);
		} else {
			alert('You need to be logged in.')
		}

		window.location.href = "/"
	})

});