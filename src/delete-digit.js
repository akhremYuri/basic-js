const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = String(n);
  s = [...s];
  let numbers = [];
  for (let i = 0; i < s.length; i++) {
    let number = [...s];
    number.splice(i, 1);
    number = number.join("");
    numbers.push(+number);
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
