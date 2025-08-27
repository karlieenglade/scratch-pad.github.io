// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/*
i: 1 array
o: prints input array values to console
c: loop
*/
function printArrayValues(array) {
  //looping over array from beginning to end
  for (var i = 0; i < array.length; i++){
    //printing each array value to the console
    console.log(array[i]);
  }
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/*
i: array
o: print input array values to console
*/
function printArrayValuesInReverse(array) {
  //loop over array starting at end and going backwards to first index
  for (var i = array.length-1; i >= 0; i--){
    //print each value to console
    console.log(array[i]);
  }
  
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
/*
i: object
o: array containing input object's keys
 */
function getObjectKeys(object) {
  //storage array to push object keys into and return later
  var storageArr = [];
  //loop over object using for var key in obj loop
  for (var key in object){
    //push each key in object into storageArr
    storageArr.push(key);
  }
  //then return that array
  return storageArr;
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/*
i: object
o: print object's keys to console
*/
function printObjectKeys(object) {
  //loop over object using for var key in
  for (var key in object){
    //print each key to the console
    console.log(key);
  }
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
/*
i: object
o: array of input object's values
*/
function getObjectValues(object) {
  //create storage array for values to push into and return later
  var valuesArr = [];
  //loop over object using for var key in object to access every key-value
  for (var key in object) {
    //push each key value into valuesArr
      //object[key] gives access to key value 
    valuesArr.push(object[key]);
  }
  //return valuesArr
  return valuesArr;

}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/*
i: object
o: print input object's values to console
*/
function printObjectValues(object) {
  //loop over object using for var key in object
  for (var key in object){
    //print each key-value --> object[key]
    console.log(object[key]);
  }
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
i: object
o: number, number of key-value pairs in inpu object
*/
function getObjectLength(object) {
  //create counter variable to add into and return later
  var counter = 0;
  //loop over object and for every key, add to counter variable
  for (var key in object){
    //add 1 to counter for every key in object
    counter += 1;
  }
  //then return counter
  return counter;
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
/*
i: object
o: input object's values, printed to console in reverse
*/
function printObjectValuesInReverse(object) {
  //create array to store object's values
  var valueArr = [];
  //loop over object 
  for (var key in object){
    //and push each key-value into valueArr
    valueArr.push(object[key])
  }
  //now loop over valueArr array backwards
  for (var i = valueArr.length-1; i >= 0; i--){
    //and print each value to the console
    console.log(valueArr[i]);
  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
