$(document).ready(function(){

	getPosts();
	
// Attach an asynchronous callback to read the data at our posts reference
});

function getPosts(){
	var ref = new Firebase("https://forumforum.firebaseio.com");
	var postref = ref.child("topics");
	postref.on("value", function(snapshot) {
		$('.topics').html("");
		var data = snapshot.val();
		var row = "";
		$.each(data, function(key, val){
			row += "<a href='topic_detail.html#"+key+"'><h2>"+val.title+"</h2></a>";
		});
		$('.topics').append(row);
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
}
