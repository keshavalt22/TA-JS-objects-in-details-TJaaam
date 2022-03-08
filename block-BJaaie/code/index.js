// Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
    eat : function() {
        console.log(` live in ${this.location} and I can eat`);
    },
    changeLocation : function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary : function() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs.`);
    }
    
}


function CreateDog(location, numberOfLegs, name, color){
    CreateAnimal.apply(this, [location,numberOfLegs]);
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
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
    summary : function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);


function CreateCat(location, numberOfLegs, name, colorOfEyes){
    CreateAnimal.apply(this, [location,numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
    meow : function() {
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName : function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes : function(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary : function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);


// Class Pattern


class CreateAnimal{
    constructor (location, numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(` live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }
    summary() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs.`);
    }
}

class CreateDog extends CreateAnimal{
    constructor(location, numberOfLegs, name, color){
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark() {
        alert (`I am ${this.name} and I can bark 🐶`);
        return;
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}


class CreateCat extends CreateAnimal{
    constructor(location, numberOfLegs, name, colorOfEyes){
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

