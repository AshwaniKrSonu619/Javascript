Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.

Tests
Waiting:myStr should not contain any spaces
Waiting:myStr should contain the strings FirstLine, SecondLine and ThirdLine (remember case sensitivity)
Waiting:FirstLine should be followed by the newline character \n
Waiting:myStr should contain a tab character \t which follows a newline character
Waiting:SecondLine should be preceded by the backslash character \
Waiting:There should be a newline character between SecondLine and ThirdLine
Waiting:myStr should only contain characters shown in the instructions



Solution:
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr)



Output:

FirstLine
    \SecondLine
ThirdLine

