let students = [];
const nr_of_st= Number(prompt("Введите количество студентов"));
let index_st = 0;
while (index_st < nr_of_st) {

let student = {};
student.name=prompt("Введите имя:");
student.marks=[];
while (true) {

    let mark =Number(prompt("Введите оценку"));

    // Прекращаем ввод?
    if (mark === "" || mark === null || mark < 1 || mark >10) break;

   student.marks.push(+mark);
  }
  students.push(student);
  index_st++;
}
//console.log(students);
let sum, average;

function Average_rating(){
    for(let i=0; i<index_st; i++){
        sum =0;
        n=0;
        for(mark of students[i].marks){
            sum += mark;
            n++;
        }
        average =  sum/n;
        console.log(students[i].name + " " + average);
    }
}
console.log("Средний балл");
Average_rating();

function Bad_average_rating(){
    for(let i=0; i<index_st; i++){
        sum =0;
        n=0;
        for(mark of students[i].marks){
            sum += mark;
            n++;
        }
        average =  sum/n;
        if(average < 5) console.log(students[i].name + " " + average);
    }
}

console.log("Средний балл ниже 5");
Bad_average_rating();

