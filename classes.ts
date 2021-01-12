class Vehicle {
  constructor(public color: string = 'blue'){}
  
  protected honk(): void {
    console.log('beep')
  }
  showColor(): void {
    console.log(this.color);
  }
}

const vehicle = new Vehicle('orange');
vehicle.showColor();

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom...')
  }
  public stop(): void {
    console.log('braking...')
  }

  accelator(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car()
car.accelator();
car.stop();
car.showColor();