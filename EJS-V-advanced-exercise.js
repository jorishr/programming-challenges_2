/*
####################################
RECOGNIZING TEXT AND CHARACTER CODES
####################################

This example is based upon the dataset in Eloquent JS Chapter V.

Given a character code, find out which script it uses.

For example, 121 represents "y" from the latin script.
*/
function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(testFunction)){
        return script;
        }
    }
    return null; //if the for loop does not find a match	
}
/*
NOTE: 
- the some(testFunction) method tests a function on each element of the array 
and return true when the function returns true on any of the elements

- the testFunction is defined below:
	([from, to]) => {return code >= from && code < to;}

Takes the array from the ranges property as an argument and is destructured, 
thus it directly looks 	inside and binds to its content.

If the code is within the range it returns true and we have a match. 
Note: from is inclusive >= and to is exclusive, as indicated at the beginning 
of the dataset
*/
function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })){
        return script;
        }
    }
    return null;	
}
characterScript(121);
// ? {name: "Latin", …}

/*
#######################################
OBTAINING CHARACTER CODES FROM A STRING
#######################################

Remember, JS strings are encoded as a sequence of 16-bit numbers or code units. 
To obtain the code unit of character in a string:*/

let string = "x";
string.charCodeAt(0) // 121
/*
For an emoji it would give you the half-character code. And the charCodeAt()
does not give you the full Unicode character code unless it is a common 
character such as "x" because some characters use up two code units. 

The rule of thumb is that now mostly two-unit characters are used.

However, in JS the string properties [] and .length use code units thus we 
have to use another method that does give the full Unicode character code: 
		
	string.codePointAt()


################
RECOGNIZING TEXT
################

When we pass a string like "hello world, ???" we want to know the percentage 
of characters that belongs to each script used in the string.

The characterScript can already recognize the script from a code. The next 
step is to count the number of characters that belong to each script. Therefore
we use the function countBy that produces an array of objects. Each object in 
the array names a group and counts the number of elements in that group:*/
	
function countBy(collection, groupNameFunction){}

/*The collection argument can be anything that we can loop over with a for 
loop, most likely an array. The groupNameFunction computes a group name for
every element.*/

let counts = [];
for(let item of collection){}
    let name    = groupNameFunction(item);
    let known   = counts.findIndex(x => x.name == name);

    if(known = -1){counts.push({name, count: 1})}
        else counts[known].count++;

return counts
/*
The findIndex finds the first value for which the given function returns true.

Next we pass through the string of text through the countBy function with the
following group name function:*/	
countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
})

/*
The charScript function returns an object with a name property that holds the 
name of a script, if the the char.codePointAt(0) has found a code unit for 
the character within the range of one of the scripts. 

If no match is found, "none" is returned because the script binding that stores
the result will be null, thus false. If the script binding holds an object with
a name property, that name property value is returned.

The countBy function then builds an array with that name and adds to that the 
number of times it found a char for that script. The function first counts the 
characters by name of script, using characterScript to assign them a name and 
falling back to the string "none" for characters that aren’t part of any script.   
		
Next that array is filtered by leaving out the "none"'s:*/
	
countBy(text, char => {}).filter(({name}) => name != "none");

/*
The filter test function takes in as an argument the destructured name property, 
thus looks inside and takes on its content and if the name is not "none" the 
object is added to a new array.

The result of the countBy() function is stored in a binding:
	let scripts = countBy(); 

We can then work with the resulting filtered array that contains objects with 
two properties: a name: name and count: x;

Next we need the total number of characters that belong to a script, which we 
can compute with reduce. If no such characters are found, the function returns 
a specific string:*/

let total = scripts.reduce((n, {count}) => n + count, 0);
/*
The reduce function works on the array of objects, starts at 0 
(second argument) and compute the function:
		(n, {count}) => n + count

The argument is the current holding binding that starts at 0 and gets added the
number that is found inside the count property.*/
	
If(total == 0) {return "No scripts found"};

/*
The last step is to transform the counting entries into readable strings with 
map method and then combines them with the join method.*/

scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ")
/*
The array scripts is taken, the parameters for map function bind to the values 
inside the name and count properties and for each entry they return a `string` 
that has a percentage computation:

	${Math.round(count * 100 / total)}
	${name} //name taken from inside the name property

Each entry results into string and they are joined by the .join() into a single 
string ", "

Thus "61% Han" and "22% Latin" become:
        "61% Han, 22% Latin".
*/