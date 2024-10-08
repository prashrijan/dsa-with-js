const students = ["Prash", "Shubik", "Anuska", "Asmita", "Pawan"]

function findStudent(students, studentName){

    if(students.length <=0 ) return -1

    for(let i = 0; i < students.length; i++){
        if(students[i] === studentName){
            return i;
        }
    }
}

console.log(findStudent(students, "Pawan"));
