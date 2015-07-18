$(document).ready(function() {
	var topicId = window.location.hash.substr(1);

	// Get a reference to our posts
	var ref 	 = new Firebase("https://forumforum.firebaseio.com/");
	var topicRef = ref.child("topics")
	var topic 	 = topicRef.child(topicId);

	// Retrieve new posts as they are added to our database
	topic.on("value", function(snapshot) {
		var topicItem 	= snapshot.val();
		var topicTitle  = topicItem.title;
		var topicBody 	= topicItem.body;
		console.log(topicItem);
		$("#topic-title").html(topicTitle);
		$("#topic-body").html(topicBody);
		$("#topic-title-modal").html('"' + topicTitle + '"');
		$("#dynamic-content").fadeIn(200);
	});
});