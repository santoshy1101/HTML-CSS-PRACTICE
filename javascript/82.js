// __proto__
// protoptype

// example of proto

// const userMethode={
//     about : function(){
//         return `my name is firstNAme ${this.firstName} `
//     },

//     is18 : function(){
//         return this.age>=18
//     }
// }

function createUser(firstName,lastName,age,gender){
    user = Object.create(createUser.prototype)
    // console.log(user)
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age,
    user.gender=gender

    return user
}

// exmaple of prototype
// prototype is extra space which is provided by function ;
// that space we are using for store anything in the form of key value pairs

createUser.prototype.about=function(){
    return  `my name is firstNAme ${this.firstName} `
}

createUser.prototype.is18=function(){
    return this.age>=18;
}


const person1 = createUser("rahul","yadav",21,"male")
const person2 = createUser("vishal","yadav",2)

console.log(person1)
console.log(person1.about())
console.log(person1.is18())