/*
Starting from the number one, an infinite set of numbers can be produced by 
either adding 5 or multiplying by 3. 

Write a function that records a sequence of additions and multiplications 
that reaches a given number.
	
For example 13. This can be reached by (1 * 3) + 5 + 5. 
For example 15. Cannot be reached.

Starting at 1 there are three possibilities for every step:
- current = target -> return path
- current > target -> cannot reach target, return null
- current < target: try addition or try multiplication

The OR operator guarantees that first the addition path is explored until a 
dead end (null) is reached. Then the multiplication path is explored.
*/
function findPath(target){
	function find(current, history){
		if(current == target){
			return history;
		} else if(current > target) {
			return null; //no point in searching no more
		} else {
            return  find(current + 5 , `(${history} + 5)`) 
                    || find(current * 3, `(${history} * 3)`);
        }
	}
	return find(1, "1"); 
}
//NOTE: no Jest test written, run js file in node console
console.log('Path to 13:', findPath(13));
console.log('Path to 23', findPath(24));
console.log('Path to 25', findPath(25));
console.log('Path to 123', findPath(123));
/**
 * Recursion tree for findPath(13)
 *              
 *                                                0- find(1, "1")
 *                1- find(6, "1 + 5")                                      4- find(3, "1 *3")     
 * 2- find(11, "1 + 5 + 5")     3- find(18, "1 + 5 * 3")          5- find(8, "1 * 3 + 5")
 *                                                         6- find(13, "1 * 3 + 5")
 */