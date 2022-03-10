class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){}
    sleep(){}
    walk(){}
}

class Player extends Person {
    constructor(sportsName){
        this.sportsName = sportsName;
    }
    play(){}
}

class Teacher extends Person {
    constructor(instituteName){
        this.instituteName = instituteName;
    }
    teach(){}
}

class Artist extends Person {
    constructor(kind){
        this.kind = kind;
    }
    createArt(){}
}

class Cricketer extends Player {
    constructor(teamName){
        this.teamName = teamName;
    }
    playCricket(){}
}
