'use strict';

/** Basic Types */

//Define a new variable `motto` for the value "The iSchool is my school"

var motto = "The iSchool is my school";


//Log out the motto
console['log'](motto);

//Define a variable `mottoLength` that stores the length of the motto.
//Use the `.length` property
//Log out the length.
var mottoLength = motto['length'];
console['log'](mottoLength);

//Use the `indexOf()` String method to see if the word "cool" is in the string.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out a _boolean_ whether it is or not.

var checkString = motto['indexOf']('cool');
console['log'](checkString >= 1);


//Use a String method to replace the word "iSchool" in the `motto` variable with
//the words "Information School". The new value should be re-assigned to the
//`motto` variable.
//Log out the updated motto.

var replaceVar = motto['replace']('iSchool', 'Information School');
console['log'](replaceVar);


//Calculate the ratio between the length of the updated motto and the length of 
//the old (which you had saved in a variable!). Log out this ratio as a 
//percentage with two decimal places of precision (e.g., `"123.45%"`).
//You can use the `.toFixed()` Number method to specify the precision. 

var replaceVarLength = replaceVar['length'];
var ratioLength = ((replaceVarLength / mottoLength) * 100);
ratioLength = ratioLength.toFixed(2);
var ratioLengthPerc = ratioLength + '%';
console['log'](ratioLengthPerc);

/** Arrays **/

//Create an array `numbers` that contains these 10 numbers:
//    1 4 1 5 9 2 6 5 3 5
//Log out the array.

var numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console['log'](numbers);

//Use bracket notation to change the `4` in the array to a `4.2`.
//Log out the updated array.

numbers[1] = 4.2;
console['log'](numbers);

//Add the number 3 to the END of the array.
//Log out the updated array.
numbers[10] = 3;
console['log'](numbers);

//Find the median (middle) value of the numbers in the array.
//Hint: sort() the array, then access the middle index of the sorted values.
//You can use the `Math.floor()` function to round to a whole number.
//Log out the median value.

numbers.sort();
var medianNum = Math.floor(numbers['length']/2);
console['log'](numbers[medianNum]);

/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//Log out the rectangle object
var rect = {};
rect.x = 30;
rect.y = 50;
rect.width = 100;
rect.height = 50;
console['log'](rect);    //// https://www.dofactory.com/javascript/objects

//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.
console['log'](rect["x"] + ",", rect["y"]);

//Set the rectangle's height to be the square root of its width. (Use the 
//`Math.sqrt()` function).
//Use *dot notation* to access the properties!

var sqrWidth = Math.sqrt(rect.width);
rect.height = sqrWidth;

//Log out the rectangle's area. Use *dot notation* to access the properties!
var rectArea = rect.height * rect.width;
console['log'](rectArea);

//Create a variable `circle` that represents a circle. This should be an object
//with properties:
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43,
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//Log out the circle

var circle = {};
circle.cx = 34;
circle.cy = 43;
circle.radius = numbers[10];
console['log'](circle);

//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
//Log out the variable. Be sure to inspect it in the developer console!

var shapes = new Array (rect, circle);
shapes['rectangle'] = rect;
shapes['circle'] = circle;
console['log'](shapes);


//Add a new ANONYMOUS object (e.g., one passed in directly without its own
//variable name) representing a right triangle to the `shapes` array.
//The triangle should have a `base` of 33 and a `height` of 44.
//Log out the updated shapes array.

//var newObject = new Object();
shapes['push']({height: 44, base: 33});    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
console['log'](shapes);

//Log out the triangle's `hypotenuse` property (don't calculate it, just log out
//the current property value!). What do you get?

console['log'](shapes['hypotenuse']);

//Assign the triangle inside the `shapes` array a 'hypotenuse' property of `55`.
//Log out the `shapes` array again.
//Visually check: what happens if you inspect the previously logged array in the 
//Chrome developer console?

shapes[2] = {hypotenuse: 55, base: 33, height: 44};
console['log'](shapes);