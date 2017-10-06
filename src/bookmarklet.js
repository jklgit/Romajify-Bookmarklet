/*
// Fullwidth converter
String.prototype.toFullWidth = function () {
return this.replace(/[A-Za-z0-9]/g, function (s) {
return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
});
};
 */

/*
function isVisible(elm) {
var rect = elm.getBoundingClientRect();
var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
 */

// Include romaji.js and run callback afterwards
function callback() {
	function applyWalker(node) {
		if (!node) {
			node = document.body;
		};

		// Create Treewalker to walk through every text node
		var walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

		// Change every hiragana and katakana to romaji
		var n;
		var iter = 0;
		while (n = walk.nextNode()) {
			// If not is not hidden
			if (n.parentNode.offsetParent !== null) {

				// if(isVisible(n.parentNode)){
				if (n.nodeValue.trim().length > 0) {
					// console.log(iter++, n.parentNode.tagName, n.nodeValue);
					n.nodeValue = romaji.fromKana(n.nodeValue);
				}
				// }
			}
		}
	};

	// If is something selected
	if (!window.getSelection().isCollapsed) {
		applyWalker(window.getSelection().focusNode.parentNode);
	} else {
		// Apply on head and body
		applyWalker(document.head);
		applyWalker(document.body);
	}
};
var s = document.createElement("script");
s.src = "https://cdn.rawgit.com/jklgit/Romajify-Bookmarklet/ae1ee7fd/src/romaji.js";
if (s.addEventListener) {
	s.addEventListener("load", callback, false)
} else if (s.readyState) {
	s.onreadystatechange = callback
};
document.body.appendChild(s);
document.body.removeChild(s);
