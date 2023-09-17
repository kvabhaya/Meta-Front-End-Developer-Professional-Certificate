class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy+=10;
    }
    doSomethingFun(){
        this.energy-=10
    }
}

class Worker extends Person{
    constructor(name="Tom",age=20,energy=100,xp=0,hourlyWage = 10){
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork(){
        this.xp+=10;
    }
}

function createIntern(){
    const intern = new Worker("Bob",21,110,0,10);
    intern.goToWork();
    return intern;
}

function createManager(){
    const manager = new Worker ("Alice",30,120,100,30);
    manager.doSomethingFun();
    return manager;
}

const internObject = createIntern();
const managerObject = createManager();

console.log("Intern Object:", internObject);
console.log("Manager Object:", managerObject);
