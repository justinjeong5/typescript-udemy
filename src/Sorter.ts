interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public sortable: Sortable) {}

  sort(): void {
    const { length } = this.sortable;

    for (let end = 0; end < length; end++) {
      for (let start = 0; start < length - end - 1; start++) { 
        if (this.sortable.compare(start, start + 1)){
          this.sortable.swap(start, start + 1);
        } 
      }
    }
  }
  printCollection(): void{
    console.log(this.sortable)
  }
}