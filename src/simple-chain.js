const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    let str = `( ${value} )`;
    this.chainArr.push(str);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position !== Math.trunc(position) ||
      position <= 0 ||
      position > this.chainArr.length
    ) {
      this.chainArr= [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    result = this.chainArr.join("~~");
    this.chainArr = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
