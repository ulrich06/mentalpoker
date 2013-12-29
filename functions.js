//TODO: Generating key

// JavaScript Document
// Constants
var primeNumber = 7;//computePrimeNumber(1000,10000);
var phi = primeNumber - 1;
/**
	computePrimeNumber
	Compute a prime number ranged by a minimum and maximum value
	Parameters :
		minimum : (int) Minimum value
		maximum : (int) Maximum value
	Return :
		(int) A prime number in range
*/
var computePrimeNumber = function(minimum, maximum){
	var number = 0;
	while(!isPrime(number))
		number = Math.floor(Math.random() * maximum) + 1;
	return number;
}

/**
	invertMod
	Compute inverse of a number modulo a prime using modular exponentiation
	Parameters :
		a : (int) Number
		p : (int) Prime number Modulo
	Return :
		(int) Inverse of a modulo p
*/
var invertMod = function(a,p){
	var ex = p-2;			
	var result = 1;
	while(ex > 0){
		if (ex % 2 == 1){
			result = (result*a) % p;
		}
		a = Math.pow(a,2) % p;
		ex = ex / 2;
	}
	return result;
}

/**
	encrypt
	Encrypt data with a given key according SRA protocol
	Parameters :
		data : (int) Data to encrypt
		key : (int) Key used
	Return :
		(int) Encrypted data
*/
var encrypt = function(data, key){
	return Math.pow(data, key) % primeNumber;
};

/**
	decrypt
	Decrypt data with a given key according SRA protocol
	Parameters :
		data : (int) Data to decrypt
		key : (int) Key used for encyption
	Return :
		(int) decrypted data
*/
var decrypt = function(data, key){
	return Math.pow(data, invertMod(key, primeNumber)) % primeNumber;
}

/**
	isPrime
	Check whether a number is a prime or not
	Parameters :
		num : (int) Number to check
	Return :
		(boolean) Result of the test
*/
var isPrime = function(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

/**
* Test if a number "a" is a squared modulo "q"
* Parameters :
*	a : (int) number to test
*	q : (int) modulo
*  Return :
*	(int) 1 if a is a squared modulo
*/

var test_sq = function(a,q) {
	return Math.pow(a, Math.floor((q-1)/2)) % q;
}

/**
* Suffle function
* Src : http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
* Parameter :
*	array : (array) Array to shuffle
* Return :
*	A shuffled array
*/
var shuffle = function(array){
	var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
