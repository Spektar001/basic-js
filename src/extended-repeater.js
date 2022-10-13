const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	const separatorDefault = '+';
  const additionSeparatorDefault = '|';
  let result = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = "";
  let addition = "";
  let additionString = "";
  let additionSeparator = "";

  additionString += (options.addition !== undefined) ? options.addition : "";
  addition += additionString;
  additionSeparator = options.additionSeparator || additionSeparatorDefault;
  for(let i = 1; i < options.additionRepeatTimes; i++) {
    addition += additionSeparator + additionString;
  }
  separator = options.separator || separatorDefault;
  result += addition;
  for(let i = 1; i < repeatTimes; i++) {
    result += separator + str + addition;
  }
  return result;
}

module.exports = {
  repeater
};
