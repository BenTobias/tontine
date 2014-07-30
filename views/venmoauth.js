function parseUrl(toParse){
	var url = require('url');
	console.log(url.parse(toParse, true).query);
}
function authVenmo(username) {
	window.location.href = 'https://api.venmo.com/v1/oauth/authorize?client_id=1856&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance&response_type=code&state='.concat(username);
}

parseUrl('http://tontine.azure.com/venmo-redirect?state=edgar&code=f1fd17315f43c01b323f5841a6dccd60');

/*
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(parseUrl('http://stackoverflow.com/questions/17184791'));
  response.end();
}).listen(3000);*/