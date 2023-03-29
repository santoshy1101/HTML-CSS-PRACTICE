// animal class
// has two properties name and age
// methode eat

class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }

    isCute(){
        return true
    }

}
//  cat-->  subClass , Animal--> Parent Class  

class Cat extends Animal{

}

// const animal1 = new Animal("Rabbit",1) 

const Tom = new Cat("Tom",2)
console.log(Tom.isSuperCute())