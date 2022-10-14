const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let arr1 = n.toString(10).split('').map(i => parseInt(i, 10));
  let result = Math.max(...arr1.map((el, i) => {
		let arr2 = [...arr1];
    arr2.splice(i, 1);
    return parseInt(arr2.join(''), 10);
  }))

  return result;
}

module.exports = {
  deleteDigit
};
