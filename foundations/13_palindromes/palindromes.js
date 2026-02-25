const palindromes = function (string) {
  const regex = /\w/g;
  const legalString = string.match(regex).join('').toLowerCase();
  const legalStringReverse = string.match(regex).reverse().join('').toLowerCase();
  return legalString === legalStringReverse;
};

// Do not edit below this line
module.exports = palindromes;
