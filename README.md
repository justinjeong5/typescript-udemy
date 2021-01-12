# typescript-udemy

Strong resuabiliy of typescript is Interfaces + Classes

![tsReuseAndScale](https://user-images.githubusercontent.com/44011462/104294813-027de500-5503-11eb-85cf-bfc3e7bebc60.png)


Typical typescript file structure is Interface definitions for working with this class + Class definition

![tsFileStructure](https://user-images.githubusercontent.com/44011462/104294539-a7e48900-5502-11eb-8d84-1169fbfb710e.png)

## basic typescript compiler usage using "tsc"

1. create src/index.ts
   1. index.ts should be into /src
2. create directory /build
   1. /build should locate on root directory
3. tsc --init
   1. type "tsc --init" on project root directory terminal to TypeScriptCompiler initiate project for typescript
   2. if tsc is not installed, 
      1. npm i -g typescript ts-node
      2. if 'EACCESS' comes up, sudo npm i -g typescript ts-node
   3. tsconfig.json will be made.
4. configure tsconfing.json
   1. comment out again "outDir", "rootDir" to undo comment out
      1. "rootDir": "./src"
      2. "outDir": "./build"
5. tsc -w
   1. using "tsc -w", typescript compiler keep watching code change and recompile again, as soon as modification detected.

## actual run project

1. initiate project for npm
   1. type npm init on root directory terminal
2. install nodemon & concurrently
   1. npm i nodemon concurrently
3. configure package.json scripts
   "start:build": "tsc -w",
   "start:run": "nodemon build/index.js",
   "start": "concurrently npm:start:*"
4. by typing "npm start", all procedures run itself.

### bubble sort

```javascript
const { length } = this.collection;

for (let end = 0; end < length; end++) {
   for (let start = 0; start < length - end - 1; start++) {
      if (this.collection[start] > this.collection[start + 1]){   // comparision
         const leftHand = this.collection[start];     // swapping
         this.collection[start] = this.collection[start + 1];
         this.collection[start + 1] = leftHand;
      }
   }
}
```

Above code works great when sorting target is array of number. Entire purpose of implementation to sorting using typescript is to apply sorting algorithm for array of number, string, even linked list contains number of string. Here is the fatal error above code: string is kinda weird! Above codes describes bubble sort using two major parts, comparison and swapping. javascript string is immutable and comparison is conducted by not string itself, but ascii values.

```javascript
let str = 'abcd';
str[0] = 'x';
console.log(str) // abcd

"X" > "a"   // false
```

Simple comparison and swapping doesn't work on string.

<img width="587" alt="Screen Shot 2021-01-12 at 8 26 57 PM" src="https://user-images.githubusercontent.com/44011462/104308857-a328d080-5514-11eb-83a4-93288700dcc2.png">
