const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = [];
  for (char of s1) {
    let index = s2.indexOf(char);
    while (index >= 0 && commonChars.includes(index)) {
      index = s2.indexOf(char, index + 1);
    }
    if (index >= 0) commonChars.push(index);
  }
  return commonChars.length;
}

module.exports = {
  getCommonCharacterCount,
};
