class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // unshift()
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // shift()
  pop() {
    if (!this.first) return undefined;
    const temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  print() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);

stack.pop();

console.log(stack);
