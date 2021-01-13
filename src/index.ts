import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharacterCollection } from './CharacterCollection'

const numberCollection = new NumberCollection([10, 3, -5 ,0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
sorter.printCollection();

const characterCollection = new CharacterCollection('Xaayb');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();
characterSorter.printCollection();
