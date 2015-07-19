var topicId = window.location.hash.substr(1);
var ref = new Firebase("https://forumforum.firebaseio.com/");
var topicRef = ref.child("topics");
var topic 	 = topicRef.child(topicId);
var commentRef = topic.child("comments");
var user_id = "";
$(document).ready(function() {
	

	// Get a reference to our posts
	

	

	// Retrieve new posts as they are added to our database
	topic.on("value", function(snapshot) {
		var topicItem 	= snapshot.val();
		var topicTitle  = topicItem.title;
		var topicBody 	= topicItem.body;
		user_id 		= topicItem.user_id;
		console.log(topicItem);
		$("#topic-title").html(topicTitle);
		$("#topic-body").html("<p>" + topicBody + "</p><span class='text-muted'>22 minutes ago</span>");
		$("#topic-title-modal").html('"' + topicTitle + '"');
		$("#dynamic-content").fadeIn(200);
		getProfileImage(user_id);
	});

	commentRef.on("child_added", function(snapshot) {
		var commentItem = snapshot.val();
		var commentTitle = commentItem.userName;
		var commentBody = commentItem.comment;
		$("#push_comment").append('<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><i>'+ commentTitle +'</i></h3></div><div class="panel-body"><h3><i>' + commentBody + '</i></h3></div></div>');

/*		$("#comment-title").html(commentTitle);
		$("#comment-body").html(commentBody);
*/
		//console.log(commentBody);
	});

	$("form").submit(function (e) {
	  	e.preventDefault();
	  	if(ref.getAuth()) {
	  		var userImage = ref.getAuth().facebook.profileImageURL;
			commentRef.push({
				comment: $("#write-comment").val(),
				userName: ref.getAuth().facebook.displayName,
				userImage: userImage,
				user_id: ref.getAuth().uid,
				created_at: Firebase.ServerValue.TIMESTAMP
			});

			$("form")[0].reset()
		} else {
			alert('You need to be logged in.')
		}

		//window.location.href = "/"
	})
});

function getProfileImage(user_id){
	var userref = ref.child("users").child(user_id);
	console.log(userref);
	userref.on("value", function(snapshot){
		$(".profile_image").attr("src", snapshot.val().profile_image);
	});
}