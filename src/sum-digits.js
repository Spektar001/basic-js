const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let arr = n.toString(10).split('').map(v => parseInt(v, 10));
	let k = 0;
	for (let i = 0; i < arr.length; i++) {
		k += arr[i];
		if(k >= 10){
			k = k.toString(10).split('').map(v => parseInt(v, 10));
			k = k[0] + k[1];
		}
	}
	return k;
}

module.exports = {
  getSumOfDigits
};
