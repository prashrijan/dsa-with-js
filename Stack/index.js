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

    pop(){


        if(this.length === 0){
            return null
        }

        let temp = this.first

        this.first = temp.next
        temp.next = null

        this.length--
    }


    min(){
        if(this.length === 0){
            return null
        }

        let current = this.first
        let minVal = current.value

        while(current.next){
            current = current.next

            if(current.value < minVal){
                minVal = current.value
            }
        }

        return minVal
    }

    max(){

        if(this.length === 0){
            return null
        }

        let current = this.first
        let maxVal = current.value

        while(current.next){
            current = current.next
            
            if(current.value > maxVal){
                maxVal = current.value
            }
        }

        return maxVal
    }
}


let myStack = new Stack(1)
myStack.push(2)
myStack.push(3)

console.log(myStack.min())
// myStack.pop()
console.log(myStack.max());


console.log(myStack);
