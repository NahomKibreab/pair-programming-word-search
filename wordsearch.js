const { transpose } = require("./matrix");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const newArr = transpose(letters);
  // Convert array item to word
  const horizontalJoin2 = newArr.map((ls) => ls.join(""));
  for (l of horizontalJoin2) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
