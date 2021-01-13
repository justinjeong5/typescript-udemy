import { Sortable, Sorter } from './Sorter'

export class CharacterCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {  // make length() -> .length as if it is a kind of property.
    return this.data.length
  }
  
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('')
    characters[leftIndex] = [characters[rightIndex], characters[rightIndex] = characters[leftIndex]][0]
    this.data = characters.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }
}