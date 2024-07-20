### Types of Languages

- strongly typed languages --> java, c++, rust
- loosely typed languages --> python , javascrip , pearl
- In js we can change the type of the variable , where ever in cpp we cant change the type of the variable

- Strongly typed - we cant change the type of the variable
- Loosely typed - we can change the type of the variable

- In big companies we want very big type checking ( In production)
- In strongly typed , there are less run time errors , because code get error in compile time --> we catch error during compile phase. At the end if it compiles , it will do what it is supposed to do
- In loosely typed , there will be run time errors we can do anything what we want

- Javascript is a powerful language but lacks types --> so typescript was introduced

## What is Typescript

- Typescript is a programming language dev and maintained by microsofft
- #### It is a strict syntatical superset of javascript and adds optional static typing to the language
- providing types to variable is done by typescript to javascript

- code written in javascript will work in typescript , while code written in type script will not work in javascript

## How does typescript code Run?

- TypeScript code never runs in browser . Browser only understands javascript
- Typescript never runs at all line by line
- Typescript is a language that is something transpiled down to "javascript"

- main.ts -->(tscompiler) --> main.js -->Runs in browser
- We only convert typescript code to javascript
- if we have any error the ts to js transpilation will fails and returns error
- i.e., We have added compiled checks to the javascript --> so we can write catch run time errors , we can catch durimg the compile time
- TSC - types : esbuild , SWC

- tsconfig.json --> says how do we convert typescript file to js file

- command : tsc -b --> transpiler a.ts to a.js

- Typescript is only syntatical language, so we cant run ts file , at the end we only run .js file

## Basic types in TypeScript

- number, string , boolean, null, undefined
- How Typescript benefit --> as codebase increase , it will be helpful to know what it expects

- Typescript can infer the return type :: type inference
- a: number , b:number --> returns : number
- good practice to write the return type

## Tsconfig.json

- target - The final ecma script version it should compiled down to final version of javascript (es5, es4..)

  - If we give code to person Who runs in internet explorer which supports older version of javascript

- **rootdir** - where should the compler looks for your typescript files - Types script files should reside inside "Src"

- **outDir** : Output files should reside inside "dist" or "build" --> javascript files are store
  - In tsconfig.json --> "rootDir" : "./src" , "outDir" : "./dist"
  - Never push dist folder to github
- **noImplicitAny** --> "noImplicitAny" : true //our codebase shoukd not contain any as type
  - "noImplicitAny" : false //our codebase will become less strict
- **removecomments** --> if True , if any comments in typescript code , it wont appear in javascript file


#### Interfaces 

- How can you assign types to objects
- example : 
const user = {
    firstName : "vamsi",
    age: 20,
    email : "a@gmail.com"
}

- To assign type to the objects , we use interface 

Interface User {
    firstName : string;
    age       : number;
    email     : string;
}


### Types in TypeScript

type User = {
    firstName : string;
    age       : number;
    email     : string;
}


- Most cases interface is used
- Types is used in case of "Union" --> lets say we have an user id , which is either number or string 
- type userId = string | number