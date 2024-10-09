// Reverse the string


function reverseString(str){
     
    if(str.length  === 0 ) return ""

    let reversedString = ''

    for(let i = str.length - 1; i >= 0; i-- ){
        reversedString += str[i]
    }

    return reversedString
} 

console.log(reverseString("hello"));



