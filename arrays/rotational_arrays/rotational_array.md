# Rotational arrays
A rotational or circular array is an array whereby the physical array functions as a shell for the actual array that has different start index and end index. The next index for arr[last] will be arr[first] with clockwise rotations. If the rotations is counter clockwise the next index for arr[0] will be arr[last].

```javascript
//Rotate [1,2,3,4,5] twice:
const arr1 = [4,5,1,2,3]  //clockwise rotation  
const arr2 = [3,4,5,1,2]  //counter clockwise rotation  
```
The actual array starts at index position 2 (1) and ends at index position 1 (5) after two clockwise rotations.

The actual array starts at index position 3 (1) and ends at index position 2 (5) after two counter clockwise rotations.

## Find next and previous index of a given element
In a regular array this is straightforward but in a rotational array we run into a problem when searching for the previous value of arr[0] and the next value of arr[1] because using i + 1 or i - 1 will return undefined.
```
arr[last + 1]   = undefined
arr[previous-1] = undefined
```
To account for these cases we can use a formula with the modulo:
- next = (i + 1) % n
- previous = (i + n - 1) % n
```
next for arr[4] = (4 + 1) % 5 = 5 % 5 = 0    -> arr[0] 

next for arr[3] = (3 + 1) % 5 = 4 % 5 = 4    -> arr[4]
next for arr[2] = (2 + 1) % 5 = 3 % 5 = 3    -> arr[3]

previous for arr[0] = (0 + 5 - 1) % 5) = 4   -> arr[4]

previous for arr[1] = (1 + 5 - 1) % 5) = 0   -> arr[0]
previous for arr[2] = (2 + 5 - 1) % 5) = 1   -> arr[1]
```
Except for next of arr[last] and previous of arr[0] the result of these
formulas is the same as i + 1 or i - 1