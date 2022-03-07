let animalMethods = {
    eat : function() {
        return console.log(` live in ${this.location} and I can eat`);
    },
    changeLocation : function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary : function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`;
    }
    
}

let dogMethods = {
    bark : function() {
        alert (`I am ${this.name} and I can bark 🐶`);
        return;
    },
    changeName : function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColor : function(newColor) {
        this.color = newColor;
        return this.color;
    },
    summaryDog : function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

let catMethods = {
    meow : function() {
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName : function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes : function(newColor) {
        this.color = newColor;
        return this.color;
    },
    summaryCat : function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

Object.setPrototypeOf(dogMethods, animalMethods);

Object.setPrototypeOf(catMethods, animalMethods);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

function createDog(location, numberOfLegs, name, color){
    let animal = Object.create(dogMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    animal.name = name;
    animal.color = color;
    return animal;
}

function createCat(location, numberOfLegs, name, colorOfEyes){
    let animal = Object.create(catMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    animal.name = name;
    animal.colorOfEyes = colorOfEyes;
    return animal;
}