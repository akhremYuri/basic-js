const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
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
}

module.exports = {
  repeater,
};
