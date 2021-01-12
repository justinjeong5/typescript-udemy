import { NumberCollection } from './NumberCollection'

export class Sorter {
  constructor(public collection: NumberCollection) {}

  sort(): void {
    const { length } = this.collection;

    for (let end = 0; end < length; end++) {
      for (let start = 0; start < length - end - 1; start++) { 
        if (this.collection.compare(start, start + 1)){
          this.collection.swap(start, start + 1);
        } 
      }
    }
  }
  printCollection(): void{
    console.log(this.collection)
  }
}