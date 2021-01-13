import { Sortable } from './Sorter'

class Node {
  next: Node | null = null;

  constructor(public data: number){}
}

export class LinkedList implements Sortable {
  private head: Node | null = null;
  public length: number = 0;

  constructor() {}

  add(value: number): void {
    const newNode = new Node(value)
    this.length++;
    if(!this.head){
      this.head = newNode;
      return;
    }
    let tail = this.head;
    while(tail.next){
      tail = tail.next;
    }
    tail.next = newNode;
  }

  at(index: number): Node {
    if(index > this.length || !this.head) 
      throw new Error('Index out of range!');
    
    let pointer: Node | null = this.head;
    let count = 0;
    while(pointer){
      if(count === index){
        return pointer;
      }
      count++;
      pointer = pointer.next;
    }
    throw new Error('Index out of range!');
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) 
      throw new Error('List is empty!');

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  print():void {
    if(!this.head) return;
    const data = [];
    let node: Node | null = this.head;
    while(node){
      data.push(node.data);
      node = node.next;
    }
    console.log(`LinkedList { data: [ ${data} ] }`);
  }
} 