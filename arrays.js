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




