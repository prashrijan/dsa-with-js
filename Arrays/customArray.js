class customArray{
    constructor(){
        this._length = 0
        this._data = {}
    }

    // length method
    length(){
        return this._length
    }

    // push method
    push(item){
        this._data[this._length] = item
        this._length++
    }

    // get method
    get(index){
        return this._data[index]
    }

    // pop method
    pop(){
        delete this._data[this._length - 1]
        this._length--
    }

    // shift method
    shift(){
        
        // reindexing
        for(let i = 0; i < this._length; i++){
            this._data[i] = this._data[i + 1]
        }

        delete this._data[this._length - 1]
        this._length--

    }

    // delete by index method
    deleteByIndex(index){

        // reindex
        for(let i = index; i < this._length; i++){
            this._data[i] = this._data[i + 1]
        }

        delete this._data[this._length - 1]

        this._length--
    }

}

const myArray = new customArray()

myArray.push("hello")
myArray.push("world")
myArray.push("this")
myArray.push("is")
myArray.push("custom")
myArray.push("array")


console.log(myArray);
myArray.deleteByIndex(5)
console.log(myArray);





