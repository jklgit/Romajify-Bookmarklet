# Romajify-Bookmarklet

Bookmarklet to romanize Hiragana, Katakana and Jouyou-Kanji.

## Installation

Create a bookmark in your browser. Enter a name and paste the following link (triple-click to mark it all):

```
javascript:(function()%7Bfunction%20callback()%7Bfunction%20applyWalker(node)%7Bif(!node)%7Bnode%3Ddocument.body%3B%7D%3Bvar%20walk%3Ddocument.createTreeWalker(node%2CNodeFilter.SHOW_TEXT%2Cnull%2Cfalse)%3Bvar%20n%3Bvar%20iter%3D0%3Bwhile(n%3Dwalk.nextNode())%7Bif(n.parentNode.offsetParent!%3D%3Dnull)%7Bif(n.nodeValue.trim().length%3E0)%7Bn.nodeValue%3Dromaji.fromKana(n.nodeValue)%3B%7D%7D%7D%7D%3Bif(!window.getSelection().isCollapsed)%7BapplyWalker(window.getSelection().focusNode.parentNode)%3B%7Delse%7BapplyWalker(document.head)%3BapplyWalker(document.body)%3B%7D%7D%3Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdn.rawgit.com%2Fjklgit%2FRomajify-Bookmarklet%2Fae1ee7fd%2Fsrc%2Fromaji.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7D%3Bdocument.body.appendChild(s)%3Bdocument.body.removeChild(s)%7D)()
```

The Javascript link above is the minified and URL-decoded version of [this file](https://github.com/jklgit/Romajify-Bookmarklet/blob/master/src/bookmarklet.js).

At the end it should look something like this:

![copy example](https://raw.githubusercontent.com/jklgit/Romajify-Bookmarklet/master/media/bookmark.jpg)

Save the bookmark.

## Use

Click the bookmark on any page to turn all Hiragana, Katakana and Kanji to Romaji.

## Limitations

* The Romanization of Kanji is not an easy task and might give wrong results mostly. This bookmarklet is just using the first given romanization from [this table on Wikipedia](https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji).

* Bookmarklets cannot be used on some website. These few websites do not allow the use of bookmarklets by using [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy). Namely Twitter, Github and Wikipedia.

## Credits

This bookmarklet is utilising work from the authors of following projects:

* [romaji.js](https://github.com/markni/romaji.js)