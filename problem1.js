const students = ["Prash", "Shubik", "Anuska", "Asmita", "Pawan"]

function findStudent(students, studentName){

    if(students.length <=0 ) return -1

    // for(let i = 0; i < students.length; i++){
    //     if(students[i] === studentName){
    //         return i;
    //     }
    // }

    let start = 0;
    let end = students.length - 1

    while (start <= end){

        let mid = Math.floor((start + end) / 2)

        if(students[mid] === studentName){
            return mid
        }
        else if(students[mid] > studentName){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
}

console.log(findStudent(students, "Pawan"));
