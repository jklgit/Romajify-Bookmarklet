// This code is used to copy Kanji from Wikipedia table
// https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji

// Fullwidth converter
String.prototype.toFullWidth = function () {
	return this.replace(/[A-Za-z0-9]/g, function (s) {
		return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
	});
};

var kanji = document.querySelectorAll('.sortable.wikitable td:nth-child(9n+2)');
var romaji = document.querySelectorAll('.sortable.wikitable td:nth-child(9n+9)');

var object = {};
for (var i = 0; i < kanji.length; i++) {
	object[kanji[i].innerText[0]] = romaji[i]
		.innerHTML.split('\n')[1]
		.split(',')[0];
}

console.log(JSON.stringify(object));
