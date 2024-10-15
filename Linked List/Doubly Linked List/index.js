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

    // pop method
    pop(){
        if(this.length === 0){
            return null
        } 

        let temp = this.head

        while(temp.next){
            temp = temp.next
        }

        this.tail = temp.prev
        this.tail.next = null

        this.length--
    }
}


const myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(4)

myDoublyLinkedList.pop()

console.log(myDoublyLinkedList);
