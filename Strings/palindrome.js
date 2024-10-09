// Palindrome

const isPalindrome = (str) => {

    // edge case
    if(str.length === 0) return false

    let reverseString = str.split("").reverse().join("")

    return reverseString === str
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("cddc"))
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Prash"));

