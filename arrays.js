//this document was created in the command line


var colors = ["red", "orange", "yellow"];

colors[3] = "green";

colors[3] = "dark green";

colors[10] = "violet"; //this leaves a lot of empty values "undefined"

var friends = new Array(); //creates a new array

var random = [34, true, "sammy"]; //can mix data values

// array methods: push and pop
//push adds a value to the end of array 
//pop removes a value from the end of an array

var dogColors = ["red", "orange", "yellow""];
dogColors.push("indigo");
dogColors.push("violet");

dogColors.pop(); //will return the last item in an array

//shift and unshift 
//shift adds items to the front of an array
//unshift adds items to the begining of an array

dogColors.unshift("infrared");

var col = dogColors.shift(); //remturns a value that can be stored in a variable

var nums =[34, 54, 22];
nums.unshift("Hello");

nums.shift();

//indexOf() - it takes an argument and trys to find that argument in an array
//returns the first value that matches

var friends2 = ["Charlie", "Liz", "David", "Mattias", "Liz"];
friends2.indexOf("David");
friends2.indexOf("Liz"); //1 and NOT 4
firends2.indexOf("Hagrid") //will return -1 because it does not exist

//slice() - copy parts of an array

var fruits = ["Banana", "Orange", "lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);

//slice can also copy and existing array
var nums2 = [1,2,3];
var nums2 = nums2.slice();





