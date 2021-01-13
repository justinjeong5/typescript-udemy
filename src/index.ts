import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharacterCollection } from './CharacterCollection'
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5 ,0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
sorter.printCollection();

const characterCollection = new CharacterCollection('Xaayb');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();
characterSorter.printCollection();

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();