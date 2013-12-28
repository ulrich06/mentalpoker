//TODO: Generating key

// JavaScript Document
// Constants
var primeNumber = findPrimeNumber(1000,10000);
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
