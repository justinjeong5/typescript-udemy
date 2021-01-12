const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number =>{
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): string => {
  if(!message){
    throw new Error(message);
  }
  return message
}

const throwError2 = (message: string): void => {
  if(!message){
    throw new Error(message);
  }
}

const throwError3 = (message: string): never => {
  throw new Error(message);
}

const logWeather = (forecase: {date: Date; weather: string}): void => {
  console.log(forecase.date)
  console.log(forecase.weather)
}

const logWeatherES2015 = ({date, weather}: {date: Date; weather: string}): void => {
  console.log(date)
  console.log(weather)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

logWeather(todaysWeather)
logWeatherES2015(todaysWeather)
