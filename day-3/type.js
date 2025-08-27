// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
/*
i: any datatype
o: boolean, based on is input value is an array
*/
function isArray(value) {
  //cannot use typeof since arrays are seen as objects 
  //Array.isArray() method works
  //returns boolean if input value is an array
  return Array.isArray(value);
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 * 
 */
/*
i: any data type
o: boolean, based on if value is an object (collection not list like array)
*/
function isObject(value) {
  // //if value is an array OR null OR a date
  if (Array.isArray(value) || value === null || value instanceof Date){
    //return false
    return false;
    //otherwise
  } else {
    //return boolean based on if value is an object object
    return typeof value === "object";
  } 
}  

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/* 
i: any datatype, value
o: boolean, based on if value is array or object object
*/
function isCollection(value) {
  //if value is an array or an object object, return true
  //if value is not null object or date object
  if (value === null || value instanceof Date){
    //return false
    return false;
    //else 
  } else {
    //return boolean based on if value is array object OR object object
    return (Array.isArray(value) || typeof value === "object");
  }

}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/*
i: any datatype
o: string representing the input value's datatype 
*/
function typeOf(value) {
  //first: IF date, null, array ... since these are objects
  //if value is a Date
  if (value instanceof Date){
    //return "date"
    return "date";
    //else if value is null
  } else if (value === null){
    //return null
    return "null";
    //else if value is an array
  } else if (Array.isArray(value)){
    //return "array"
    return "array";
    //else
  } else {
    //return typeof value 
    return typeof value;
  }

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
