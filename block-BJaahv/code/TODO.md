# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
```js
function createUser (name, id, noOfProjects){
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;

  user.getProjects = function() {
    return this.noOfProjects;
  },
  user.changeName = function(newName) {
    this.name = newName;
    return this.name;
  },
  user.incrementProject = function(value = 1) {
    this.noOfProjects = noOfProjects + value;
    return this.noOfProjects;
  },
  user.decrementProject = function(value = 1) {
    this.noOfProjects = noOfProjects - value;
    return this.noOfProjects;
  }

  return user;
}
```
- [ ] Using Object.create (prototypal pattern)

```js
let userMethod = {
  getProjects : function() {
    return this.noOfProjects;
  },
  changeName : function(newName) {
    this.name = newName;
    return this.name;
  },
  incrementProject : function(value = 1) {
    this.noOfProjects = noOfProjects + value;
    return this.noOfProjects;
  },
  decrementProject : function(value = 1) {
    this.noOfProjects = noOfProjects - value;
    return this.noOfProjects;
  }
}

function createUser (name, id, noOfProjects){
  let user = Object.create(userMethod);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}
```
- [ ] Using Pseudoclassical Way

```js
function CreateUser (name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects : function() {
    return this.noOfProjects;
  },
  changeName : function(newName) {
    this.name = newName;
    return this.name;
  },
  incrementProject : function(value = 1) {
    this.noOfProjects = noOfProjects + value;
    return this.noOfProjects;
  },
  decrementProject : function(value = 1) {
    this.noOfProjects = noOfProjects - value;
    return this.noOfProjects;
  }
}

```

- [ ] Using Class

```js
class CreateUser{
  constructor (name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects () {
    return this.noOfProjects;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  incrementProject(value = 1) {
    this.noOfProjects = noOfProjects + value;
    return this.noOfProjects;
  }
  decrementProject(value = 1) {
    this.noOfProjects = noOfProjects - value;
    return this.noOfProjects;
  }
};
```
## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
