class HashTable{
    constructor(size = 5){
        this.keyMap = new Array(size)
    }

    _hashFunction(key){
        let sum = 0

        const PRIME_NUMBER = 31

        for(let i = 0; i < Math.min(key.length, 100); i++){
            const charCode = key.charCodeAt(0) - 96

            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length
        }
    }
}