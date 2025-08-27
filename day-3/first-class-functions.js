// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
/*
i: string or number, "base"
o: function that tests if a given value is greater than the base; boolean
*/
function createGreaterThanFilter(base) {
  //assigning function to variable to return later
  //funciton takes value that can be a string or number
  var testFunc = function isValueGreater(value) {
    //if base and value are both numbers
    if (typeof base === "number" && typeof value === "number") {
      //then return boolean based on value > base
      return value > base;
      //else if base and value are both strings 
    } else if (typeof base === "string" && typeof value === "string"){
      //then make both lowercase and use charCodeAt() function on both
        //to compare their string letter characters as numbers
        //return boolean based on value > base
      return value.toLowerCase().charCodeAt() > base.toLowerCase().charCodeAt();
    }
  }
  //return this function
  return testFunc;
}
/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
/*
i: string or number, base
o: function that tests if given value < base <-- boolean
*/
function createLessThanFilter(base) {
  //create variable to store function in and return later
  var lessFunc = function isValueLess(value){
    //if base and value are both numbers
    if (typeof base === "number" && typeof value === "number"){
      //return boolean based on value < base
      return value < base;
      //else if base and value are both strings
    } else if (typeof base === "string" && typeof value === "string"){
      //make both lowercase and compare using .charCodeAt() function
        //to compare string alphabet values as numbers
        return value.toLowerCase().charCodeAt() < base.toLowerCase().charCodeAt();
    }
  }
  //return this function
  return lessFunc;
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
i: string, a single character
o: function that tests if given string starts with input startsWith character; boolean
c: needs to be case-sensitive
*/
function createStartsWithFilter(startsWith) {
  //create variable to store function in and return later
    //function takes 1 string
  var filter = function(string){
    //return string[0].toLowerCase() === startsWith.toLowerCase() <--boolean
    return string[0].toLowerCase() === startsWith.toLowerCase();
  }
  //then return this function
  return filter;
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
i: string, one character
o: function that tests whether a given string ends with endsWith; boolean
c: case-sensitive
*/
function createEndsWithFilter(endsWith) {
  //create variable to store funciton in and return later
    //function takes 1 string
  var filter = function(string){
    //converts both endsWith character and string to lowercase
      //and returns boolean based on if last character of string is endsWith
    return endsWith.toLowerCase() === string[string.length-1].toLowerCase();
  }
  //return this function
  return filter;
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples:
 * 
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 * 
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 */
/*
i: array of strings. function that modifies a string 
o: input array of strings, modified
*/
function modifyStrings(strings, modify) {
  //create array to store modified array
  var modArr = [];
  //loop over strings array 
  for (var i = 0; i < strings.length; i++){
    // pass each string in array into modify function 
      // and push into storage array to return later 
    modArr.push(modify(strings[i]));
  }
  //return modified array
  return modArr;
}


/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * examples:
 * 
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 * 
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */
/*
i: array of strings, "strings"
o: function that tests a string in some way, "test"; boolean
  //only true if every string in strings array passes test
*/
function allStringsPass(strings, test) {
  //create storage array to store 
  var storage = [];
  //loop over input strings array
  for (var i = 0; i < strings.length; i++){
    //going to test each value by passing it into test func
    //if test(strings[i]) is true
    if (test(strings[i])){
      //push into storage array
      storage.push(strings[i]);
    }
  }
    //then if storage array and strings array have same length, return true
      //returns boolean based on if lengths are the same
    return storage.length === strings.length;
    
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
