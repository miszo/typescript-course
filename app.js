"use strict";
// string
var myName = 'Miszo';
// myName = 30; // type error
// number
var myAge = 30;
// myAge = 'Miszo'; // type error
// boolean
var hasHobbies = true; // or false
// hasHobbies = 1; // type error
// assign types
var myRealAge;
myRealAge = 30;
// myRealAge = '30';
// array
var hobbies = ['cooking', 'football'];
hobbies = [100];
// hobbies = 100; // type error
// tuples
var address = ['Potatostreet', 10];
// let address: [string, number] = [10, 'Potatostreet']; // error
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple"; // 3
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'Audi';
console.log(car);
car = { brand: 'Audi', series: 'Q7' };
console.log(car);
// function and types
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'miszo'));
console.log(multiply(2, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
;
