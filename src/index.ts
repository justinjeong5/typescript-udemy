class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let end = 0; end < length; end++) {
      for (let start = 0; start < length - end - 1; start++) {
        if (this.collection[start] > this.collection[start + 1]){
          const leftHand = this.collection[start];
          this.collection[start] = this.collection[start + 1];
          this.collection[start + 1] = leftHand;
        }
      }
    }
  }
  printCollection(): void{
    console.log(this.collection)
  }
}

const sorter = new Sorter([10, 3, -5 ,0]);
sorter.sort();
sorter.printCollection();
 