$(document).ready(function(){

	getPosts();
	sendEmail();
	
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

function sendEmail(){
	/*var m = new mandrill.Mandrill('M5KsiYsmJCJoDKOxkGWhnQ');
	var params = {
	    "message": {
	        "from_email":"Johan@dobus.se",
	        "to":[{"email":"sebastian@dobus.se"}],
	        "subject": "Sluta leka tuff.....",
	        "text": "Whaaaaaat"
	    }
	};
	console.log(m);
	 m(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });*/
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
