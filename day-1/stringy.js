// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in an input string.
O: Function returns the length of the input string.
C:
E:
*/

function length(string) {
  //return string length
  return string.length;
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
i: string
o: string of input string but in lowercase
*/
function toLowerCase(string) {
  //return input string in lowercase
  return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
i: string
o: string of input string but in uppercase
*/
function toUpperCase(string) {
  //return input string in uppercase
  return string.toUpperCase();

}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
i: string
o: string of all input string elements connected by dash "-" instead of space " "
c: convert all input string elements to lowercase
*/
function toDashCase(string) {
  // return string should be all lowercase 
  //array assigned to input string split by each space 
  var array = string.split(" ");
  //then join this array by a dash to convert it to a string and return it in lowercase
  return array.join("-").toLowerCase();
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
i: 2 strings, one is a word, one is a single character
o: boolean; true/false
c: not case-sensitive 
e:
*/
function beginsWith(string, char) {
   //use conditional to compare 
  //if string[0] to lower case strictly equals to lowercase char
  if (string[0].toLowerCase() === char.toLowerCase()){
    //return true
    return true;
    //else (if the 2 characters converted to lowercase are not strictly equal) return false
  } else {
    return false;
  }
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
i: 2 strings, one word and one single character
o: boolean; true/false
c: not case-sensitive
e:
*/
function endsWith(string, char) {
  //split string by each char ("") to access last char of string. assign to variable
  var splitStringArr = string.split(""); 
  //if last index value of splitStringArr to lowercase strictly equals char to lowercase
  if (splitStringArr[splitStringArr.length-1].toLowerCase() === char.toLowerCase()){
    // return true
    return true;
  } else {
    return false;
  }
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
i: 2 strings
o: 1 string of 2 input strings concatenated 
*/
function concat(stringOne, stringTwo) {
  // return stringOne and stringTwo concatenated 
  return stringOne + stringTwo;
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
i: any number of strings
o: 1 string of all input strings concatenated
c: uses given array args array --> Array.from(arguments)
*/
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
//join args array by "" so that every input string is concat together
  // assign to variable to return
  var returnStr = args.join("");
  //then return this string
  return returnStr;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
i: 2 strings
o: 1 string, the longer of the 2 input strings
*/
function longest(stringOne, stringTwo) {
  //if stringOne has longer length than stringTwo
  if (stringOne.length > stringTwo.length){
    //return stringOne
    return stringOne;
    //else if stringTwo has longer length than stringOne
  } else if (stringTwo.length > stringOne.length){
    //return stringTwo;
    return stringTwo;
  }
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
i: 2 strings
o: a number; 1 if stringOne higher in abc order, -1 if second is higher, or 0 if same
*/
function sortAscending(stringOne, stringTwo) {
   //localeCompare returns -1 is first string is higher
  //so, make stringTwo first so that -1 is returned if stringTwo is higher
  //return
  return stringTwo.localeCompare(stringOne);
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
i: 2 strings
o: a number; -1 if stringOne higher in abc order, 1 if second is higher, or 0 if same
*/
function sortDescending(stringOne, stringTwo) {
  //localeCompare returns -1 if first string is higher
  //return localeCompare func with stringOne as first and stringTwo second
  return stringOne.localeCompare(stringTwo);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}

