"use strict";
exports.__esModule = true;
var message = "Welcome back to typescript";
console.log(message);
var age = 20;
var name = "Biruk";
var isBeginner = false;
var introduction = "hello, my name is ".concat(name, " and I am ").concat(age, " years old, i am ").concat(isBeginner ? "beginner " : "senior ", "for type script");
console.log(introduction);
// defining undefine or null value
var n = null;
var u = undefined;
// defining list of array
/**
 * array can be defined by using type[] || Array<type>
 */
var listOfAge = [12, 12, 14, 17];
var listOfName = ["Biruk", "Endris", "Aman"];
// defining the array that contain different data type
/**
 * on this case what we define as an array should follow the same structure for example
 * variableName: [string, number] = [<mustBeString>, <mustBeNumber>]
 */
var person1 = ["Biruk", 32];
// working with enum 
// not sure the use case but it's worth to keep it
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
// working with any data type which store any types of data
var anyType = null;
anyType = "Biruk";
anyType = 23;
// multiType declaration
var multiType;
multiType = true;
multiType = 21;
// function in typescript
/**
 * function(var:<type>, var:<type>):<returnType> { ...doSomething }
 */
function add(num1, num2) {
    return num1 + num2;
}
add(1, 3);
