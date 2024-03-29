Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.

Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

Tests
Passed:someAdjective should be set to a string at least 3 characters long.
Passed:You should append someAdjective to myStr using the += operator.
                                                                                                                                          O
                                                                                                                                          
Solution:
                                                                                                                                      
                                                                                                                                          
// Change code below this line
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;  
                                                                                                                                          
                                                                                                                                                                                                                                                                                   
                                                                                                                                          
 Output:
                                                                                                                                          
Learning to code is fun.                                                                                                                                          
                                                                                                                                          
