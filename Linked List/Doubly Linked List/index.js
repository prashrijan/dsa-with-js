class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }


    // push method
    push(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.length++
    }
}