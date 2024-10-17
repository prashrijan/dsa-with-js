class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.length = 1;
    }
}


let myStack = new Stack(1)

console.log(myStack);
