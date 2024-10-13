// Node

class Node {
    constructor(value){
        this.head = value
        this.next = null
    }
}


class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.push(2)

console.log(myLinkedList);

