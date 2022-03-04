# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    constructor(side);{
        this.width = side;
        this.height = sise;
    }
}

```
- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    constructor(side);{
        this.width = side;
        this.height = sise;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
}
```
- Create another method named `calcArea` that will return the area of the square.
```js

class Square {
    constructor(side);{
        this.width = side;
        this.height = sise;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
}

```
- Create a getter method named `area` that will return area of the square.
```js
class Square {
    constructor(side);{
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    } 
}

```
- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))
```js
class Square {
    constructor(side);{
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    } 
    set area(value){
        let side = math.sqrt(value);

        this.wide = side;
        this.height = side;
    }
}
```
- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
```js

class Square {
    constructor(side);{
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    } 
    set area(value){
        let side = math.sqrt(value);

        this.wide = side;
        this.height = side;
    }
    static isEqual(a, b){
        return (a.width * a.height) === (b.width * b.height);
    }
}

```
- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
```js

let square1 = new Square(200);

let square2 = new Square(300);

```
- Check the `area` getter method on both square.
```js



```
- Check the `isEqual` method and pass the two instance you created above.
```js
Square.isEqual(square1);

Square.isEqual(square2);
```
## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js

class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

```
- Create a getter method named `fullName` that will return the full name of the person.
```js
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }
}

```
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
```js
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }
    set fullName(name){
        if(name.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            let firstName = name.split(` `)[0];
            let lastName = name.split(` `)[1];
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}

```
- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js

class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }
    set fullName(name){
        if(name.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            let firstName = name.split(` `)[0];
            let lastName = name.split(` `)[1];
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    nameContains(string) {
        return `${firstName} ${lastName}`.contains(string);
    }
}

```
- Create two instance of the `User` class
```js
let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Stark");

```
- Check by using the `fullName` setter method with name bigger than 5 characters.
```js
let user1 = new User("Arya", "Stark");

```
- Check by using the `fullName` setter method with name less than 5 characters.
```js

```
- Check the `fullName` using getter
```js
```
- Check the `nameContains` method
```js
user1.nameContains("Ar");

```