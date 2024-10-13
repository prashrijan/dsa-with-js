// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) => [[1, 2, 3], [4, 5, 6], [7, 8]]


const chunk = (array, size) => {

    let chunkedArray = []
    let index = 0

    while(index < array.length){

        const chunkPart = array.slice(index, index + size)
        chunkedArray.push(chunkPart)        
        index += size    
    }
    return chunkedArray
}

console.log(chunk([1, 2, 3, 4], 2));
