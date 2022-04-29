const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  constructor(isDirectMach = true) {
    this.directMath = isDirectMach;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    for (let i = 0, inx = 0; i < message.length; i++) {
      let mChar = message[i].toLowerCase();
      let charIndex = this.alphabet.indexOf(mChar);
      if (charIndex >= 0) {
        let kInd = inx % key.length; //let kInd = i < key.length ? i : i % key.length;
        let kChar = key[kInd].toLowerCase();
        let keyIndex = this.alphabet.indexOf(kChar);
        let cipherIndex = (charIndex + keyIndex) % 26;
        result += this.alphabet[cipherIndex];
        inx++;
      } else result += message[i];
    }
    result = result.toUpperCase();
    if (!this.directMath) {
      result = result.split("");
      result.reverse();
      result = result.join("");
    }
    return result;
  }
  decrypt(ciphertext, key) {
    if (ciphertext === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    for (let i = 0, inx = 0; i < ciphertext.length; i++) {
      let cChar = ciphertext[i].toLowerCase();
      let chipherIndex = this.alphabet.indexOf(cChar);
      if (chipherIndex >= 0) {
        let kInd = inx % key.length; //let kInd = i < key.length ? i : i % key.length;
        let kChar = key[kInd].toLowerCase();
        let keyIndex = this.alphabet.indexOf(kChar);
        let messageIndex = chipherIndex - keyIndex;
        messageIndex = messageIndex < 0 ? messageIndex + 26 : messageIndex;
        result += this.alphabet[messageIndex];
        inx++;
      } else result += ciphertext[i];
    }
    result = result.toUpperCase();
    if (!this.directMath) {
      result = result.split("");
      result.reverse();
      result = result.join("");
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
