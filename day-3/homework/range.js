// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/*
i: 2 numbers/integers
o: array, containing all integers between start and end, inclusive
c: loop, push
*/
function range(start, end) {
  //create storage array to push into and return later
  var storage = [];
  //if start < end
  if (start < end){
    //loop over numbers from start to end, inclusive
      for (var i = start; i <= end; i++){
        //push each integer into storage array
        storage.push(i);
      }
      //else if start > end
  } else if (start > end){
    //loop over numbers from start to end backwards, inclusive
    for (var i = start; i >= end; i--){
      //push numbers into storage array
      storage.push(i);
    }
  }
  //return storage array
  return storage;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
