class HashTable{
    constructor(size = 5){
        this.keyMap = new Array(size)
    }

    _hashFunction(key){
        let sum = 0

        const PRIME_NUMBER = 31

        for(let i = 0; i < Math.min(key.length, 100); i++){
            const charCode = key.charCodeAt(i) - 96

            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length
        }

        return sum
    }

    set(key, value){
        const index = this._hashFunction(key)

        if(!this.keyMap[index]) this.keyMap[index] = []

        this.keyMap[index].push([key, value])
        return this
    }

    get(){

    }
}

const phoneBook = new HashTable()

phoneBook.set('john', '0450528184')

console.log(phoneBook);
