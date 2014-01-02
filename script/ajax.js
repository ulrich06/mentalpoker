/*******************************************
 * ajax File - Mental Poker Remote communication
 * Cyril Cecchinel, Matthieu Jimenez
 * Polytech'Nice-Sophia - 2013
 *******************************************/
 
 var sendToBob = function(requestObj, responseObj){
	 var request = new XMLHttpRequest()
	 request.onreadystatechange = function() {
			if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
				responseObj.content = request.responseText;
			}
		};
	 request.open("POST", SERVER_URL);
	 request.setRequestHeader("Content-type", "application/x-www-form-urlencoded", false);
	 request.send("json_string="+JSON.stringify(requestObj));
 };