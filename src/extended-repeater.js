const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = {}
) {
  if (typeof str !== "string") str = String(str);
  if (addition === undefined) addition = "";
  if (typeof addition !== "string") addition = String(addition);
  if (typeof additionRepeatTimes === "number") {
    addition = addition + additionSeparator;
    addition = addition.repeat(additionRepeatTimes);
    addition = addition.slice(0, addition.length - additionSeparator.length);
  }
  str = str + addition;
  if (typeof repeatTimes === "number") {
    str = str + separator;
    str = str.repeat(repeatTimes);
    str = str.slice(0, str.length - separator.length);
  }
  return str;
};
