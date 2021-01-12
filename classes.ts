class Vehicle {
  protected honk(): void {
    console.log('beep')
  }
}

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
