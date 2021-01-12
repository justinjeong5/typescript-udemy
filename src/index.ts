interface Collection {
  
}

class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let end = 0; end < length; end++) {
      for (let start = 0; start < length - end - 1; start++) {

        // If collection is an array of numbers
        if (this.collection instanceof Array) { // Type Guard for object(not primitives)
          // from here to the end of block, 
          // this.collection treated as Array, not union of number[] and string.
          if (this.collection[start] > this.collection[start + 1]){
            const leftHand = this.collection[start];
            this.collection[start] = this.collection[start + 1];
            this.collection[start + 1] = leftHand;
          } 
        }
        // If collection is a string, do this logic instead:
        if (typeof this.collection === 'string') { // Type Guard for primitives
          // comparison and swapping
        }

        if (this.collection instanceof LinkedList){

        }
        
        // .........
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
