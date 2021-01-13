# typescript-udemy

Strong resuabiliy of typescript is Interfaces + Classes

![tsReuseAndScale](https://user-images.githubusercontent.com/44011462/104294813-027de500-5503-11eb-85cf-bfc3e7bebc60.png)


Typical typescript file structure is Interface definitions for working with this class + Class definition

![tsFileStructure](https://user-images.githubusercontent.com/44011462/104294539-a7e48900-5502-11eb-8d84-1169fbfb710e.png)

## basic typescript compiler usage using "tsc"

1. Create src/index.ts
   ```bash
   mkdir src
   cd src
   pwd      // it should be like ".../{current project}/src"
   echo > index.ts
   ```
2. Create directory /build
   ```bash
   cd ..
   pwd      // it should be like ".../{current project}"
   mkdir build
   ```
3. Typescript compiler initialization
   ```bash
   tsc --init
   ```
   
   1. if tsc is not installed, 
      ```bash
      npm i -g typescript ts-node
      ```   

   2. if 'EACCESS' comes up
      ```bash
      sudo npm i -g typescript ts-node
      ```

   tsconfig.json will be made like below.
   ![image](https://user-images.githubusercontent.com/44011462/104399707-9055e080-5594-11eb-8afa-3b48060240c4.png)


4. Configure tsconfing.json
   1. comment out again "outDir", "rootDir" to undo comment out
      ```json
      //tsconfing.json
      ...
      "compilerOptions": {
         ...
         "rootDir": "./src",
         "outDir": "./build",
         ...
      }
      ...
      ```
5. Typescript compiler watches
   tsc keeps watching code changed and recompiles.
      ```bash
      tsc -w
      ```

## actual project run

1. initiate project for npm
   ```bash
   pwd      // it should be like ".../{current project}"
   npm init
   ```
2. install nodemon & concurrently
   ```bash
   npm i nodemon concurrently
   ```
3. configure package.json scripts
   ```json
   // package.json
   ...
   "scripts": {
      ...
      "start:build": "tsc -w",
      "start:run": "nodemon build/index.js",
      "start": "concurrently npm:start:*"
   }
   ...
   ```
4. by typing "npm start", all procedures run itself.
   ```bash
   npm start
   ```
   ![image](https://user-images.githubusercontent.com/44011462/104399974-1d009e80-5595-11eb-88b4-317ecba91804.png)


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



![sorter](https://user-images.githubusercontent.com/44011462/104401573-cba5de80-5597-11eb-99fb-5b1df7383c4c.png)
