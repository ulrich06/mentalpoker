var cards = shuffle([2,6,3]);
var ce = Array();
for (var c = 0; c<3;c++){
	ce[c] = encrypt(cards[c],5);
}