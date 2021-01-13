export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let end = 0; end < length; end++) {
      for (let start = 0; start < length - end - 1; start++) { 
        if (this.compare(start, start + 1)){
          this.swap(start, start + 1);
        } 
      }
    }
  }
}