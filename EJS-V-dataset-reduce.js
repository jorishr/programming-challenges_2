//  ELOQUENT JS - CHAPTER v - EXERCISES

/* 
  EXAMPLE FROM ELOQUENT JS CHAPTER V: DATASET and .reduce
  
  Count the numbers of characters inside a range. 
  
  See dataset: array of objects. 
  
  Each object has inside a property called ranges: [[],[],[]], 
  which is an array of arrays. 
  
  Thus for each script we reduce the ranges of the array to a single value: 
  the number of characters. 
*/

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
 	  }, 0);
};

/* 
  NOTE that the argument <script> could be <x> and refers to the script object.
  We call the ranges property of the script, an array, and apply the reduce 
  method to that array.
  The reduce function takes two arguments: the callBackFunction and the 
  accumulator, set to start at 0.

  The callback function takes two arguments: the accumulator called count
  and the [from, to], which is a destructuring of the ranges arrays: 

  Since we know the value we are binding is an array (parameters are bindings)
  we can use square brackets to “look inside” of that value, binding its 
  content. 
  Thus the callback function will look inside the ranges and assign
  "from" to the first value inside and "to" to the second value inside the 
  array. Then we can use those to compute a sum. 

  The ranges are ascending values thus to count char reverse the sum.
  
  The count acc starts at 0 and for each iteration it will add to that
  the sum of the ranges.
*/

/* 
  Now that we have a function to reduce the ranges of every script to a single
  value we can write another reduce function to find the script with the MOST 
  characters.
  You can use an if statement OR a tercery operator: condition ? a : b
*/

SCRIPTS.reduce((acc, next) => 
  {return charCount(acc) < charCount(next)? next : acc;});

//  OR

SCRIPS.reduce((acc, next) => 
  {if(charcount(acc) > charCount(next)){return acc} else {return next;}})  	

/* 
  LOGIC 
  There is no startValue parameter, the array SCRIPTS has at least one value, 
  and we start at the firstvalue (a script object) of the array. 
  
  Thus reduce() loops over the SCRIPTS dataset (an array of objects). 

  The acc starts as the first object in the array and that object is compared
  to the second object in the array. The one with the highest charCount is 
  returned. 
  
  And the next iteration starts with the acc holding the object or script with 
  the highest charCount and is compared to the next object.

  After the final iteration, acc holds the value of the object with hightest 
  charCount.  
*/

/* 
  NOTE that you can also write a similar function WIHTOUT the use of a higher
  order function.

  LOGIC
  
  The biggest starts of as null, thus the first iteration of charCount(biggest) 
  gets an if statement that is false. Therefor you add the ||. 

  Here you have a good use case for null because an empty {} or [] 
  would also produce a false if statement and that would harder to mend. 
*/

let biggest = null;
for(let script of SCRIPTS){
  if(biggest == null || charCount(biggest) < charCount(script)){
    biggest = script;
  }
};
console.log(biggest);


//  NEXT: FIND AVERAGE YEAR OF LIVING/DEAD SCRIPTS

SCRIPTS.filter(s => s.living).map(s => s.year)

//  OR longer

SCRIPTS.filter(function(value){
  return value.living;
}).map(function(value){
  return value.year;
})

/* 
  LOGIC

  The filter method loops through the SCRIPT array and builds up a new array 
  that only contains the living scripts, namely all the script objects for 
  which the living property value is true.

  On the resulting array of objects the map method creates an new array with 
  only the the year property of those objects. Which is an array of numbers.
*/
/* 
  Now that we have an array of numbers that represent the years of the living
  scripts. We have to reduce that array to a single value, namely the average.

  LOGIC

  The accumulator starts at first value of the array, and the callbackFn 
  creates a sum, on each iteration. 

  The end value for acc + next after the last iteration is divided by the 
  arr.length.
*/

function average(arr){
		  return arr.reduce((acc, next) => (acc + next) / arr.length);
};

//  OR longer version:

function average(arr){
  return arr.reduce(function(acc, next){
    return (acc + next) / arr.length;
  })
};

// The last step is to put it all together and round the result:
	
Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))) 
// -> 1188

// For the dead scripts only one simple tweak:

Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))) 
// -> 188

/*  
  The above pipeline is easy to understand. If you would write one big loop
  the code has less steps and will run faster but is more difficult to 
  understand what the actual steps are: 
*/

let total = 0;
let count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
Math.round(total / count);

/* 
  LOGIC

  Thus you run through the array of objects(SCRIPTS) and if the living 
  condition is met you update the total with the year. 
  This will result in a binding with a sum of all the living scripts years. The
  count binding tracks the addition of years and is used for the calculating 
  the average. 
*/