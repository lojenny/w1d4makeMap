var words = ["ground", "control", "to", "major", "tom"];

var result = words.map(function(w) {
    return w.length;
});

var result2 = words.map(function(w) {
  return w.toUpperCase();
});

var result3 = words.map(function(w) {
  return w.split('').reverse().join('');
});

console.log(result3);

// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]