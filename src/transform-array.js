const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  let comandArr = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  let removed = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i + 1 < arr.length && !comandArr.includes(arr[i + 1])) {
        i++;
        removed.push(i);
      }
    } else if (arr[i] === "--discard-prev") {
      let k = 1;
      while (i - k >= 0 && removed.includes(i - k)) {
        k++;
      }
      if (i - k >= 0 && !comandArr.includes(arr[i - k])) result.pop();
    } else if (arr[i] === "--double-next") {
      if (i + 1 < arr.length && !comandArr.includes(arr[i + 1]))
        result.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      let k = 1;
      while (i - k >= 0 && removed.includes(i - k)) {
        k++;
      }
      if (i - k >= 0 && !comandArr.includes(arr[i - k]))
        result.push(arr[i - k]);
    } else result.push(arr[i]);
  }
  return result;
}

module.exports = {
  transform,
};
