/**
 * To add custom functions to all string instance in a program you can add that
 * function to the class prototype: String.prototype.myFn = function(){}.
 * 
 * You can also add a function to a particular string if you instancied that 
 * string using the String class constructer. This gives you a string object to
 * which you can add properties.
 */
const myStr = new String('hello');
myStr.x = 'goodbye';
console.log(myStr.x);       // -> goodbye
console.log(myStr['x']);    // -> goodbye

/**
 * Add a function to the string so that console.log(myStr['y'](01)) results in '1'
 * Thus the function needs return a string that trims 0 values.
 */
myStr.y = (val) => String(val);
console.log(myStr['y'](01));        // -> 1
console.log(myStr['y'](00001));     // -> 1

//NOTE: no test written, just run in the js script in the node console.