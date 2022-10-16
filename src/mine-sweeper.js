const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	const result = matrix.map((e) => e.map((_) => 0));
	for (let i = 0; i < matrix.length; i++) {
		 const formula = ([i, j]) => [
			 [i - 1, j - 1],
			 [i - 1, j],
			 [i - 1, j + 1],
			 [i, j - 1],
			 [i, j + 1],
			 [i + 1, j - 1],
			 [i + 1, j],
			 [i + 1, j + 1],
		 ];
		 for (let j = 0; j < matrix[i].length; j++) {
			 if (matrix[i][j]) {
				 const res = formula([i, j]);
				 for (let l = 0; l < 8; l++) {
					 if (
						 res[l][0] >= 0 &&
						 res[l][1] >= 0 &&
						 res[l][0] < matrix.length &&
						 res[l][1] < matrix[i].length
					 ) {
						 result[res[l][0]][res[l][1]]++;
					 }
				 }
			 }
		 }
	 } 
	 return result;
}

module.exports = {
  minesweeper
};
