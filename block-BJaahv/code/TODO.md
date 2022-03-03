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

  user.getProjects = function(noOfProjects) {
    return noOfProjects;
  },
  user.changeName = function(name) {
    this.name = name;
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
function createUser (name, id, noOfProjects){
  let user = Object.create(createUser.prototype);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}

createUser.prototype = {
  getProjects : function(noOfProjects) {
    return noOfProjects;
  },
  changeName : function(name) {
    this.name = name;
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
- [ ] Using Pseudoclassical Way

```js
function CreateUser (name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects : function(noOfProjects) {
    return noOfProjects;
  },
  changeName : function(name) {
    this.name = name;
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
  getProjects (noOfProjects) {
    return noOfProjects;
  }
  changeName(name) {
    this.name = name;
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
