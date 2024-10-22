class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.root === null){
            this.root = newNode
        }

        let temp = this.root

        while(true){
            if(this.root.value === newNode.value){
                return undefined
            }

            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }else{
                    temp = temp.left
                }
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }else{
                    temp = temp.right
                }
            }
        }
    }
}

let myTree = new BST()

myTree.insert(5)
myTree.insert(6)
myTree.insert(7)
myTree.insert(1)
myTree.insert(2)
myTree.insert(3)

console.log(myTree);
