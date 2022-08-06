Compound Assignment With Augmented Division

The /= operator divides a variable by another number.

myVar = myVar / 5;
Will divide myVar by 5. This can be rewritten as:

myVar /= 5;
Convert the assignments for a, b, and c to use the /= operator.

Tests
Passed:a should equal 4.
Passed:b should equal 27.
Passed:c should equal 3.
Passed:You should use the /= operator for each variable.
Passed:You should not modify the code above the specified comment

Solution:

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


console.log(a)
console.log(b)
console.log(c)



Output:
4
27
3
