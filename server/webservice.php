<?
/*******************************************
 * Web service for Mental Poker - Bob side
 * Cyril Cecchinel, Matthieu Jimenez
 * Polytech'Nice-Sophia - 2013
 *******************************************/
header("Content-Type: text/plain");
// Get raw data from client
$json = $_POST['json_string'];

// Translate raw data into an array
$obj = json_decode($json);

echo 'Request: ' . $obj->{"name"} . 'Parameters: ' . $obj->{"parameters"};
?>