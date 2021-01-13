# typescript-udemy

## ⌨️Usage 

### basic typescript compiler usage using "tsc"

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
         "outDir": "./build",
         "rootDir": "./src",
         ...
      }
      ...
      ```
5. Typescript compiler watches
   tsc keeps watching code changed and recompiles.
      ```bash
      tsc -w
      ```

### actual project run

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

