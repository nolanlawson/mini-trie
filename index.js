'use strict'

var CODA_MARKER = '__$CODA$__'

function MiniTrie (words) {
  this._dict = {}
  for (var i = 0, len = words.length; i < len; i++) {
    var word = words[i]
    var dict = this._dict
    for (var j = 0, len2 = word.length; j < len2; j++) {
      var char = word.charAt(j)
      dict = (dict[char] = dict[char] || {})
    }
    dict[CODA_MARKER] = true
  }
}

MiniTrie.prototype.search = function (str) {
  var dict = this._dict
  var i = -1
  var len = str.length
  while (++i < len) {
    var char = str.charAt(i)
    if (str.charAt(i) in dict) {
      dict = dict[char]
    } else {
      break
    }
  }
  return dict[CODA_MARKER] && str.substring(0, i)
}

module.exports = MiniTrie
