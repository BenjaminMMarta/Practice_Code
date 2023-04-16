// Loop Practice //


/*
let numbers = [1,10,3,7,5,9,2,8,4,6];
let newNumbers = [];

function loop() {
  for (let i = 0; i <= numbers.length -1; i++) {
    newNumbers.push(`The number ${numbers[i]} was added!`);
    console.log(newNumbers); 
  } 
}

loop();
*/


// Array Practice //


/*
let names = ["Beck", "Zebra", "Axel", "Stephen", "John"];
names.sort();
console.log(names);
     
let moreNumbers = [5,8,2,1,6,3];
moreNumbers.sort();
console.log(moreNumbers);


// Function & Conditional Statement Practice //


function saying(food) {
  if (food === "Pizza" || food === "pizza") {
    console.log(`Today, I'm going to be bad and eat ${food} for dinner!`);
  } else if (food === "Salad" || food === "salad") {
    console.log(`Today, I'm going to be good and eat ${food} for dinner!`);
  } else {
    console.log(`I'm going to try something different today and eat ${food} dinner!`);
  }
}

saying("Tuna");
*/


// Object Practice //
/*
const names = {
  first: "Ted",
  second: "Philip",
  third: "Jennifer",
  fourth: function (name) {
    console.log(`Hello, my name is ${name}!`);
  }
}

names.fourth(names["third"]);
names["fifth"] = "Donald";
names.sixth = "Greg";

console.log(names);
console.log(names.first);
*/
