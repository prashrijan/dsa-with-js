const text = "Hello my name name name is Prashrijan"


const wordCounter = (text) => {


    let map = new Map()

    let array = text.split(" ")

    for(let i = 0; i < array.length; i++){
        let char = array[i]
        if(map.has(char)){
            map.set(char, (map.get(char) + 1))
        }else{
            map.set(char, 1)
        }
    }
    
    return map 
    
}


console.log(wordCounter(text))