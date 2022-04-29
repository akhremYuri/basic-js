const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let i = 0;
  while (i < str.length) {
    let num = 0;
    let char = str[i];
    while (char === str[i]) {
      num++;
      i++;
    }
    result += num > 1 ? `${num}${char}` : char;
  }
  return result;
}

module.exports = {
  encodeLine,
};
