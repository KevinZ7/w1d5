function isPalindrome(s) {
  var expected = s.split(' ').join('');
  var stringReverse = s.split(' ').join('').split('').reverse().join("");
  return expected == stringReverse;
}

module.exports = isPalindrome;


