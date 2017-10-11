// This script is used for copying the cyrillic symbols from this table:
// https://en.wikipedia.org/wiki/Romanization_of_Russian
var romaji = document.querySelectorAll('.sortable.wikitable td:nth-child(12n+2)'); // 0 to 32
var cyrill_upper = document.querySelectorAll('.sortable.wikitable th:nth-child(2n+1)'); // 7 to 39
var cyrill_lower = document.querySelectorAll('.sortable.wikitable th:nth-child(2n+2)'); // 6 to 38

var object = {};
var u, l, r;

for (var i = 0; i <= 32; i++) {
	u = cyrill_upper[i + 7].innerText.trim();
	l = cyrill_lower[i + 6].innerText.trim();
	r = romaji[i].innerText.trim();
	if (r !== '–') {
		if (u !== r.toUpperCase()) {
			object[u] = r.substr(0,1).toUpperCase() + r.substr(1).toLowerCase();
		}
		if (l !== r.toLowerCase()) {
			object[l] = r.toLowerCase();
		}
	}
}

console.log(JSON.stringify(object));
