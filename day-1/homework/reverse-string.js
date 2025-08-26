// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
  //take string and return it reversed as a string
  //need to split string by each char to access each char. array here. assign to variable
  var inputSplit = input.split("");
  //create array to push values into
  var reverseArr = [];
//then loop backwards over this array
for (var i = inputSplit.length-1; i >= 0; i--){
  //push each index value into new array
  reverseArr.push(inputSplit[i]);
}
//then join each value in this new array by "". assign to variable to return
var outputString = reverseArr.join("");
//return this variable of reversed string 
return outputString;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
