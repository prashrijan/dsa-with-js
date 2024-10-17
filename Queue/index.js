class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue{
    constructor(value){
        let newNode = new Node(value)

        this.first = newNode
        this.last = newNode

        this.length = 1;
    }

    enqueue(value){

        let newNode = new Node(value)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }

        newNode.next = this.last
        this.last = newNode

        this.length++
    }
}


let myQueue = new Queue(2)
myQueue.enqueue(4)
myQueue.enqueue(6)
myQueue.enqueue(8)

console.log(myQueue);
