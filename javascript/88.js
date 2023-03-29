// Super

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    eat(){
        return `${this.name} is eating`
    }

    isSuperCute(){
        return this.age<=1
    }

    isCute(){
        return true
    }
}

class Mouse extends Animal{

    // example of super Class

    constructor(name,age,speed){
        super(name,age)
        this.speed=speed;
    }

    run(){
        return `${this.name} run at ${this.speed}kmph`
    }

}

const jerry = new Mouse("jerry",2,40)

console.log(jerry.run())
console.log(jerry)