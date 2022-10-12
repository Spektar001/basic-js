const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

	const MODERN_ACTIVITY = 15;
	const HALF_LIFE_PERIOD = 5730;
	let end_activity = Number(sampleActivity);
	let n = Math.log(MODERN_ACTIVITY / end_activity);
	let k = 0.693 / HALF_LIFE_PERIOD;
	let t = Math.ceil(n / k);

if ( typeof sampleActivity !== "string" ||
	 	isNaN(sampleActivity) ||
	 	sampleActivity <= 0 ||
	 	sampleActivity === null ||
	 	sampleActivity === undefined ||
	 	sampleActivity > MODERN_ACTIVITY ||
	 	sampleActivity.length == 0 ) {
		return false;
	}

	return t;
}

module.exports = {
  dateSample
};
