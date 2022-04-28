const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let names = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let name = members[i].trim();
      names.push(name[0].toUpperCase());
    }
  }
  names = names.sort();
  return names.join("");
};
