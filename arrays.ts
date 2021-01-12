// string[]
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

/////////////////////////////////////
// Why array with type?
/////////////////////////////////////

// 1) Help with inference when extracting values
const fordCar = carMakers[0];
const myCar = carMakers.pop();

// 2) Prevent incompatitble values
carMakers.push(100);

// 3) Help with array built-in function such as 'map'
carMakers.map((car: string):string => {
  return car.toUpperCase();
})

// 4) Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2030-01-12');
importantDates.push(new Date());
