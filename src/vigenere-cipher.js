const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(type = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key || typeof message !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    let messageCopy = message.toUpperCase().split(' ').join('');
    let keyCopy = key.toUpperCase();
    let preResult = '';
    let finalResult = '';
    for(;messageCopy.length > keyCopy.length;) {
			keyCopy+=keyCopy;
		}
    for (let i = 0; i < messageCopy.length; i++) {
      let newAlphabet = [...this.alphabet];
      let codeAlphabet = newAlphabet.concat(newAlphabet.splice(0, newAlphabet.indexOf(keyCopy[i]))).join('');
      if (this.alphabet.includes(messageCopy[i])) {
				preResult += codeAlphabet[this.alphabet.indexOf(messageCopy[i])];
			}
      else {
				preResult += messageCopy[i];
			}
    }
    let reverseMessage = preResult.split('').reverse();
    for (let i = 0; i < message.length; i++) {
      if (message[i] != ' ') finalResult += reverseMessage.pop();
      else finalResult += ' ';
    }

    if (this.type) {
      return finalResult;
    } else {
      return finalResult.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key || typeof encryptedMessage !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    let encryptedMessageCopy = encryptedMessage.toUpperCase().split(' ').join('')
    let keyCopy = key.toUpperCase();
    let preResult = '';
    let finalResult = '';
    for(;encryptedMessageCopy.length > keyCopy.length;) {
			keyCopy+=keyCopy;
		}
    for (let i = 0; i < encryptedMessageCopy.length; i++) {
      let newAlphabet = [...this.alphabet];
      let codeAlphabet = newAlphabet.concat(newAlphabet.splice(0, newAlphabet.indexOf(keyCopy[i]))).join('');
      if (this.alphabet.includes(encryptedMessageCopy[i])) {
				preResult += this.alphabet[codeAlphabet.indexOf(encryptedMessageCopy[i])];
			}
      else {
				preResult += encryptedMessageCopy[i];
			}
    }
    let reverseEncryptedMessage = preResult.split('').reverse();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] != ' ') finalResult += reverseEncryptedMessage.pop();
      else finalResult += ' ';
    }

    if (this.type) {
      return finalResult;
    } else {
      return finalResult.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
