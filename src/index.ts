import { NumberCollection } from './NumberCollection'
import { CharacterCollection } from './CharacterCollection'
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5 ,0]);
numberCollection.sort();
console.log(numberCollection)

const characterCollection = new CharacterCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection)

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
linkedList.sort();
linkedList.print()