const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
}

const arr2 = arr.slice();
const res = [];

arr2.forEach((element, i) => {
		switch (element) {
				case '--discard-next':
						arr2[i + 1] ? arr2.splice(i, 2, null) : null;
						break;
				case '--discard-prev':
						arr2[i - 1] ? res.pop() : null;
						break;
				case '--double-next':
						arr2[i + 1] ? res.push(arr2[i + 1]) : null;
						break;
				case '--double-prev':
						arr2[i - 1] ? res.push(arr2[i - 1]) : null;
						break;
				default:
						res.push(element);
		}
});

return res;
}

module.exports = {
  transform
};
