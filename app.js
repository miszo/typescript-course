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
