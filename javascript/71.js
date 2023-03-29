// Methodes

// Function inside Object

function moreInfo(){
    console.log(`my name is ${this.firstName} and age is ${this.age}`)
}

const person1={
    firstName:"Rahul",
    age:"21",
    about :moreInfo
}
const person2={
    firstName:"Vishal",
    age:"26",
    about :moreInfo
}
const person3={
    firstName:"Ajeet",
    age:"29",
    about :moreInfo
}

person1.about()
person2.about()
person2.about()

