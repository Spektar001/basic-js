const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if(!Array.isArray(members)) {
		return false;
	}
	let copy = [... members];
	let arr = [];
	let word = '';
	
	copy.forEach(element => {
		if (typeof element === 'string') {
			arr.push(element.trim().toUpperCase());
		}
	});
	arr.sort();
	for (let i = 0; i < arr.length; i++) {
		word += arr[i][0];
	}
	return word;
}

module.exports = {
  createDreamTeam
};
