const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
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
=======
/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
>>>>>>> refs/remotes/origin/master
};
