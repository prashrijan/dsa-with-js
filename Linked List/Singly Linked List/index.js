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

    // push method
    push(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    // pop method
    pop(){
        let temp = this.head
        let prev = this.head
        
        while(temp.next){
            prev = temp
            temp = prev.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
    }

    // unshift method 
    unshift(value){
        let newNode = new Node(value)
        let prevNode = this.head

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.head = newNode
        this.head.next = prevNode
    }

    // shift method
    shift(){
        if(!this.head){
            return null
        }

        let prevNode = this.head

        this.head = prevNode.next

        prevNode = null

        this.length--

        if(this.length === 0){
            this.tail = null
        }
    }

    // getFirst method
    getFirst(){

        if(!this.head){
            return null
        }

        return this.head
    }


    // getLast method
    getLast(){
        if(!this.head){
            return null
        }

        let temp = this.head

        while(temp.next){
            temp = temp.next
        }

        return temp
    }

    // get by index method
    get(index){
        let counter = 0
        let temp = this.head

        while(counter !== index){
            temp = temp.next
            counter++
        }

        return temp
    }

    // set method
    set(index, value){

        let node = this.get(index)

        if(node){
            node.value = value
            return true
        }
        return false
    }

    // insert method
    insert(index, value){
        
        if(index === 0){
            return this.unshift(value)
        }
        
        if(index === this.length){
            return this.push(value)
        }
        
        let newNode = new Node(value)

        const prevNode = this.get(index - 1)

        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++

        return true
    }

    // size method
    size(){

        let counter = 0
        let temp = this.head

        while(temp.next){
            temp = temp.next
            counter++
        }

        return counter
    }

    // clear method
    clear(){
        this.head = null
        this.tail = null
        this.length = 0
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.push(2)
// myLinkedList.pop()
myLinkedList.unshift(5)
myLinkedList.shift()
// console.log(myLinkedList.getFirst())
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(0));
// myLinkedList.set(0, 10)

myLinkedList.insert(1, 20)
// console.log(myLinkedList.size())
myLinkedList.clear()

console.log(myLinkedList);

