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


// Class Practice //

class Surgeon {
  //Constructor
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  //Methods
  introduce() {
    console.log("This is " + this.name + "!");
  }

  hello() {
    console.log("My name is " + this.name + " and I'm saying 'Hello!")
  }

  more() {
    console.log("This is more practice for " + this.name + " in the " + this.department + ".");
  }

  imLearning() {
    console.log("I'm starting to get it!");
  }

  oneMoreTime() {
    console.log("One more time to practice class methods");
  }
}

//Create new instances
const surgeonRomero = new Surgeon ('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon ('Ruth Jackson', 'Orthopedics');
const surgeonMarta = new Surgeon ('Benjamin Marta', 'Pediactric');
const surgeonNewName = new Surgeon ('My name is Benjamin', "I work in the hospital")
const myMessage = new Surgeon("Jennifer");
const greeting = new Surgeon("Bob");
const morePractice = new Surgeon("Benjamin", "Hair Transplant");
const learning = new Surgeon();
const oneMoreTime = new Surgeon();

// log instances
console.log(surgeonRomero);
console.log(surgeonJackson);
console.log(surgeonMarta);
console.log(surgeonNewName);

//Log results
console.log(myMessage.introduce());
console.log(greeting.hello());
console.log(morePractice.more());
console.log(learning.imLearning());
console.log(oneMoreTime.oneMoreTime());
*/

//jQuery//

