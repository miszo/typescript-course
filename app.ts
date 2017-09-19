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