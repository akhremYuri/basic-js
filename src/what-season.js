const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined || date === null)
    return "Unable to determine the time of year!";
  if (
    typeof date !== "object" ||
    date.constructor !== Date ||
    date.getTime() !== date.getTime()
  )
    throw new Error("Invalid date!");
  let month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    default:
      return "Unable to determine the time of year!";
  }
};
