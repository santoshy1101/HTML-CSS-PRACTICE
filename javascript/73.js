// call apply bind;


function personInfo(movie,series){
        console.log(this.firstName,this.age,movie,series)
}


const person1 = {
    firstName:"rahul",
    age:22,
    // about : function(){
    //     console.log(this.firstName,this.age)
    // }
}
const person2 = {
    firstName:"vishal",
    age:22
}

// personInfo.call(person2,"Thor","loki")
// personInfo.apply(person1,["Thor","loki"])
const func = personInfo.bind(person1,"Thor","loki")

func()
