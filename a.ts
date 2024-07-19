const x: number = 1;
console.log(x);

const y: string = "Vamsi";
console.log(x + y);

//arrow functions

const a = (fname: string, lname: string, age: number) => {
  console.log("Hello " + fname + lname + age);
};

a("vamsi", "tarun", 20);

//functions

//assign a return type

function calcSum(a: number, b: number): number {
  return a + b;
}

const res = calcSum(2, 4);
console.log(res);

//create function isLegal return true/false based on age

function isLegal(age: number): string {
  if (age > 18) {
    return "Legal to vote";
  } else {
    return "Not legal to vote";
  }
}

const legal = isLegal(50);
console.log(legal);

//write a function and pass function as parameter , tha prints aftewr 1 second

function printAfter1s(fn: ()=> void) {
  setTimeout(fn, 1000);
}

printAfter1s(function fn(){
    console.log("Printing after 1 seconds")
})
