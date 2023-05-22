

/*
push(value) : añadir el elemento, value, al stack.
pop() : sacar un elemento del stack.
min() : obtener el elemento con el valor mínimo.
peek(): obtener el elemento que está el en top del Stack

Importante
TODOS los métodos mencionados anteriormente deben ser de O(1).
Para la resolución del ejercicio no se puede utilizar ningún Array method

STACK {{{{}}}} <- LinkedList

LinkedList head { 1° next: { 2° next: { 3° next:{} } } }

head { 1° next: { 2° next: { 3° next:{ next: null } } } }

top { 3° next: { 2° next: {1° next} } }
top.value

Node {
  next:null,
  value: value
}
*/
class MinStack {
  // Your code here:
  constructor() {
    this.top = null;
  }
}
class Node {
  // Your code here:
  constructor(value) {
    this.next = null;
    this.value = value;
    this.min = null;
  }
}

// let back1 = crudoStack.top;
// crudoStack.top = node2;
// crudoStack.top.next = back1;
MinStack.prototype.push = function (value) {
  if (!this.top) {
    this.top = new Node(value);
    this.top.min = this.top.value;
  } else {
    const newTop = new Node(value);
    value < this.top.min ? (newTop.min = value) : (newTop.min = this.top.min);
    newTop.next = this.top;
    this.top = newTop;
  }
};
MinStack.prototype.pop = function () {
  var value;
  this.top ? (value = this.top.value) : null;
  this.top ? (this.top = this.top.next) : null;
  return value;
};
MinStack.prototype.peek = function () {
  return this.top.value;
};
MinStack.prototype.min = function () {
  return this.top.min;
};

const newMinStack1 = new MinStack();
newMinStack1.push(10);
newMinStack1.push(2);
newMinStack1.push(-1);
newMinStack1.push(1);

console.log(newMinStack1);
console.log(newMinStack1.peek());
console.log(newMinStack1.min());

module.exports = {
  Node,
  MinStack,
};

// class Stack {
//   constructor(){
//     this.data=[]
//   }
// }
// Stack.prototype.push = function(value){
//   this.data.push(value)
// }
// Stack.prototype.pop = function(){
//   this.data.pop()
// }

// const stack1 = new Stack() // {data:[10, 2, -1, 1, 5]}
// stack1.push(10)
// stack1.push(2)
// stack1.push(-1)
// stack1.push(1)
// stack1.push(5)

// stack1.min() // -> -1   -1   -1   2    10

// // O(1)
// stack1.peek() //  this.data.length -1

const crudoStack = {
  top: null,
};
const node1 = {
  next: null,
  value: 1,
};
const node2 = {
  next: null,
  value: 2,
};
const node3 = {
  next: null,
  value: 3,
};

crudoStack.top = node1;

let back1 = crudoStack.top;
crudoStack.top = node2;
crudoStack.top.next = back1;

let back2 = crudoStack.top;
crudoStack.top = node3;
crudoStack.top.next = back2;

// crudoStack.top = crudoStack.top.next;

console.log(crudoStack);

// MIN  2 SOLUCIONES:
// 1. Es hacer en paralelo una stack con los valores minimos
// { top: { next: { next: { next: null, value: 2 }, value: -1 }, value: 1 } }
// { minTop: { next: { next: { next: null, min: 2 }, min: -1 }, min: -1 } }
// this.minTop.min  // O(1)
