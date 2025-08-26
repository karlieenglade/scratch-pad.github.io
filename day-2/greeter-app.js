// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day,
 * write a greeting program that prints a greeting to the screen like so:
 *
 * // hour is 0-11 // greeterApp(10) => 'Good Morning'
 * Good Morning!
 *
 * // hour is 12-16 // greeterApp(14) => 'Good Afternoon'
 * Good Afternoon!
 *
 * // hour is 17-21 // greeterApp(20) => 'Good Evening'
 * Good Evening!
 *
 * // hour is 22-24 // greeterApp(22) => 'Good Night'
 * Good Night!
 *
 * TIPS:
 *
 *   a. At what threshold does morning become afternoon? What comparison
 *      can be used to test that the hour is within the morning threshold.
 *      It's best to be consistant and use the SAME type of comparison for
 *      each threshold.
 *
 *   b. Does the last threshold even need an else-if?
 *
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */
/*
i: number, an hour
o: string, correlated greeting ... log, not return
c: use if / else-if / else
e: 
*/

function greeter(hour) {
  //if hour is 0-11 
  if (hour >= 0 && hour < 12){
    //print good morning
    console.log("Good Morning!");
    // else if hour > 11 and < 17
  } else if (hour > 11 && hour < 17){
    //print good afternoon
    console.log("Good Afternoon!");
    // else if hour > 16 and < 22
  } else if (hour > 16 && hour < 22){
    //print good evening
    console.log("Good Evening!");
    //else if hour is > 21 and < 25
  } else if (hour > 21 && hour < 25){
    //print good night
    console.log("Good Night!");
  }
}

/*
 * To test our greeter when developing, we need to fake some input data, ie,
 * the hour, so just change the input value to check your work.
 *
 * In a more realistic setting, you might do something like this to get the
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.greeter = greeter;
}
