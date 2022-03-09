class Stack{
    constructor(){
        this.stack = [];
    }
    push(elm){
        this.stack.push(elm);
        return this.stack;
    }
    dequeue(){
        this.stack.splice(0, 1);
        return this.stack;
    }
    peek(index = 0){
        return this.stack[index];
    }
    isEmpty(){
        return !(this.stack.length > 0);
    }
    displayQueue(){
        return this.stack.join(" ");
    }
    get length(){
        return this.stack.length;
    }
}


let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty());


class Queue {
    constructor(){
        this.stack = [];
    }
    enqueue(elm){
        this.Queue.push(elm);
        return this.Queue;
    }
    pop(){
        this.Queue.pop();
        return this.Queue;
    }
    peek(index = this.Queue.length - 1){
        return this.Queue[index];
    }
    reverse(){
        return this.Queue.reverse();
    }
    isEmpty(){
        return !(this.Queue.length > 0);
    }
    displayStack(){
        return this.Queue.join(" ");
    }
    get length(){
        return this.Queue.length;
    }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); 