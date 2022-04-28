const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      const arrEl = [0];
      for (let i = 0; i < arr.length; i++) {
        arrEl.push(this.calculateDepth(arr[i]));
      }
      return 1 + Math.max(...arrEl);
    }
    return 0;
  }
};
