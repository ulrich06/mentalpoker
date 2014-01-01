/*******************************************
 * Crypto functions File
 * Cyril Cecchinel, Matthieu Jimenez
 * Polytech'Nice-Sophia - 2013
 *******************************************/
 
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
	bezout
	Recursive function which return (g,x,y) / px+qy=g where g = gcd(p,q).
Ref :	 http://en.wikipedia.org/wiki/Modular_multiplicative_inverse#Extended_Euclidean_algorithm
	Return :
		Array of bezout coefficients
*/
var bezout = function(p,q)
{
	if (p==0) return [q,0,1];
	else
		{
			var result = bezout(q%p,p);
			var g = result[0];
			var y = result[1];
			var x = result[2];
			return [g, x-Math.floor(q/p)*y, y];
		}
}

/**
	invmod
	Inverse modulo of a mod q
	Input :
		a : (int) Number
		q : (int) Modulo
	Return :
		(int) Inv. Mod of a mod q
*/
var invmod = function(a,q)
{
	var result = bezout(a,q);
	var g = result[0];
	var x = result[1];
	var y = result[2];
	if (g !=1) return -1; else { var tmp = x%q; if (tmp < 0) return q + tmp; else return tmp; }
	
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
	return Math.pow(data, key) % PRIME_NUMBER;
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
	return Math.pow(data, invmod(key, PRIME_NUMBER - 1)) % PRIME_NUMBER;
};

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
};

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
};

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
};

var gcd = function(x, y) {
	while (y != 0) {
		var z = x % y;
		x = y;
		y = z;
	}
	return x;
};

var computeKey = function(){
	var tmp;
	do {
		tmp = Math.floor(Math.random() * (Math.sqrt(PRIME_NUMBER - 1))) + 1;
	}
	while (gcd(tmp, PRIME_NUMBER - 1) != 1 && tmp < 2);
	return tmp;
};