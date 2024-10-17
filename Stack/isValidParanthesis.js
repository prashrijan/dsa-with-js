const isValidParanthesis = (str) => {

    const stack = []

    // const map = {
    //     "(" : ")",
    //     "{" : "}",
    //     "[" : "]"
    // }

    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let char of str){
        if(char in map){
            if(stack.length > 0 && stack[stack.length - 1] === map[char]){
                stack.pop()
            }else{
                return false
            }
        }
        else{
            stack.push(char)
        }
    }


    // for(char of str){
    //     if(map[char]){
    //         stack.push(char)
    //     }else{
    //         let close = stack.pop()

    //         if(!close || map[close] !== char){
    //             return false
    //         }
    //     }
    // }

    return stack.length === 0

}

console.log(isValidParanthesis("()[]{}"));
console.log(isValidParanthesis("([)]"));
console.log(isValidParanthesis("()"));
console.log(isValidParanthesis(")"));
