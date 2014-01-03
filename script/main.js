/*******************************************
 * main File - Mental Poker launcher
 * Cyril Cecchinel, Matthieu Jimenez
 * Polytech'Nice-Sophia - 2013
 *******************************************/
 
 // Create local player
 var alicePlayer = new Player("Alice");
 // Create remote player
// var bobPlayer = new RemotePlayer("Bob", "http://home.cecchinel.fr/mentalpoker");
 
 // Create cards
 var card1 = new Card(1);
 var card2 = new Card(2);
 var card3 = new Card(3);
 var card4 = new Card(4);
 var card5 = new Card(5);
 var card6 = new Card(6);
 var card7 = new Card(7);
 var card8 = new Card(8);
 var card9 = new Card(9);
 var card10 = new Card(10);
 
 // Mental Poker deck of cards
 var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

 /** Connect with bob **/
 
 // Prevent reusing an older session with bob
 var quitObj = new Request("QUIT");
 var resQuitObj = new Response();
 sendToBob(quitObj, resQuitObj);

 // Connect to bob and send prime number	
 var helloObj = new Request("HELLO", PRIME_NUMBER);
 var resHelloObj = new Response();
 sendToBob(helloObj, resHelloObj);

 // Send cards to bob
 var deckObj = new Request("RECEIVE_CARDS", cards);
 var resDeckObj = new Response();
 sendToBob(deckObj, resDeckObj);

// Get cards encrypted with Bob' secret key

var ecardstmp = JSON.parse(resDeckObj.content);
var ecards = new Array(ecardstmp.length);

for(i=0;i<ecardstmp.length;i++) { 
	ecards[i] = new Card(ecardstmp[i]); 
}
