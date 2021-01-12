
// Primitives
let apples: number = 10;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
let numberArr: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {
  engine: string = 'v8';
  seats: number = 5;
  registration: boolean = true;
}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (value: number) => void = (value: number) =>{
  console.log(value);
};

// annotation vs inference
let temp: number = 10;
// popover on variable temp says temp: number
let temp1 = 10;
// popover on variable temp1 says temp1: number
let temp2;
temp2 = 10;
// popover on variable temp2 says temp2: Any
