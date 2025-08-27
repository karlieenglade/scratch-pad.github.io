// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
i: n/a
o: prints numbers 1-100, but "Fizz" in place of multiples of 3, 
   "Buzz" in place of multiples of 5, and "FizzBuzz" if mult of both 3 and 5
*/
function fizzBuzz() {
 //loop numbers 1-100
 for (var i = 1; i <= 100; i++){
  //if i is mult of 3 amd not mult of 5
  if (i % 3 === 0 && i % 5 !== 0){
    //print "Fizz"
    console.log("Fizz");
    //else if i is mult of 5 and not 3
  } else if (i % 5 === 0 && i % 3 !== 0){
    //print "Buzz"
    console.log("Buzz");
    //else if i is mult of 3 and 5
  } else if (i % 3 === 0 && i % 5 === 0){
    // print "FizzBuzz"
    console.log("FizzBuzz");
    // else (for all other numbers)
  } else {
    //print number
    console.log(i);
  }
 }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
