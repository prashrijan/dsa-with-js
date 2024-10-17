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

    push(value){

        let newNode = new Node(value)

        if(!this.first){
            this.first = newNode
        }

        newNode.next = this.first
        this.first = newNode

        this.length++
    }
}


let myStack = new Stack(1)
myStack.push(2)
myStack.push(3)


console.log(myStack);
