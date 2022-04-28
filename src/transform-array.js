const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
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
};
