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

        this.last.next = newNode
        this.last = newNode

        this.length++
    }


    dequeue(){
        if(this.length === 0){
            return null
        }

        let temp = this.first
        this.first = this.first.next
        temp.next =  null

        this.length--
    }
}


let myQueue = new Queue(2)
myQueue.enqueue(4)
myQueue.enqueue(6)
myQueue.enqueue(8)

myQueue.dequeue()

console.log(myQueue);
