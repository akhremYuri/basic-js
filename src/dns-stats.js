const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  for (domain of domains) {
    let domainNames = domain.split(".").reverse();
    for (let i = 0; i < domainNames.length; i++) {
      let propArr = domainNames.slice(0, i + 1);
      let domainProp = `.${propArr.join(".")}`;
      if (domainProp in dns) {
        dns[domainProp] += 1;
      } else dns[domainProp] = 1;
    }
  }
  return dns;
}

module.exports = {
  getDNSStats,
};
