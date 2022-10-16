const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if(!arr.includes(-1)) {
		return arr.sort(function(a, b) {
			return a - b;
		});
	} else {
	let q = [];
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] != -1) {
			q.push(arr[i]);
		}
	}
	q = q.sort(function(a, b) {
		return a - b;
	});
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] == -1) {
			q.splice(i,0, -1)
		}
	}
	return q;
	}
}

module.exports = {
  sortByHeight
};
