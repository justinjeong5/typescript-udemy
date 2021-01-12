class Vehicle {
  drive(): void {
    console.log('driving...');
  }

  honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom...')
  }
  stop(): void {
    console.log('braking...')
  }
}

const car = new Car()
car.drive();
car.honk();
car.stop();
