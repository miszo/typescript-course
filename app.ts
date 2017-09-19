// string
let myName: string = 'Miszo';
// myName = 30; // type error

// number
let myAge: number = 30;
// myAge = 'Miszo'; // type error

// boolean
let hasHobbies: boolean = true; // or false
// hasHobbies = 1; // type error

// assign types
let myRealAge: number;
myRealAge = 30;
// myRealAge = '30';

// array
let hobbies: any[] = ['cooking', 'football'];
hobbies = [100];
// hobbies = 100; // type error

// tuples
let address: [string, number] = ['Potatostreet', 10];
// let address: [string, number] = [10, 'Potatostreet']; // error

// enums
enum Color {
  Red = 10, // 10
  Green, // 11
  Yellow = 2, // 2
  Purple // 3
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = 'Audi';
console.log(car);
car = { brand: 'Audi', series: 'Q7' };
console.log(car);

// function and types
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// console.log(multiply(2, 'miszo'));
console.log(multiply(2, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));;
