
$(document).ready(function(){
	getPosts();
	
	//sendEmail();

	$('#add-post-form').on('submit', function(e){
		e.preventDefault();
		var ref = new Firebase("https://forumforum.firebaseio.com");
		var postsRef = ref.child("topics");
	  	if(ref.getAuth()) {
			var newPostsRef = postsRef.push({
				title: $("#title").val(),
				body: $("#body").val(),
				user_id: ref.getAuth().uid,
				created_at: Firebase.ServerValue.TIMESTAMP
			});
			var id = newPostsRef.key();
			console.log(id);
			window.location.href = "topic_detail.html#"+id;
		} else {
			alert('You need to be logged in.')
		}
	});
	
// Attach an asynchronous callback to read the data at our posts reference
});

function getPosts(){
	var ref = new Firebase("https://forumforum.firebaseio.com");
	var postref = ref.child("topics");
	var row = "";
	postref.on("child_added", function(snapshot) {
		$('.topics').html("");
		var data = snapshot.val();
		console.log(data);
		row += "<a href='topic_detail.html#"+snapshot.key()+"'><h2>"+data.title+"</h2></a>";
		$('.topics').append(row);
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
}

function sendEmail(){
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
	      'key': 'M5KsiYsmJCJoDKOxkGWhnQ',
	      'message': {
	        'from_email': 'Johan@dobus.se',
	        'to': [
	          {
	            'email': 'sebastian@dobus.se',
	            'name': 'Sebastian Marcusson',
	            'type': 'to'
	          }
	        ],
	        'subject': 'Din fula jävel',
	        'html': '<h1>Fuck you</h1>'
	      }
	    }
	});
}
