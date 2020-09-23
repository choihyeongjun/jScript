var students=[];

students.push("김현동");//뒤에추가

students[1]="김도은";//주소값추가

students.unshift("김다희");//앞에추가
console.log(students[0]);
console.log(students[1]);
students.pop();
students.shift();
students.splice(1,1,"이광호");
for(student of students){
    console.log(students);
}
var newstud=students.slice(3,1);
for(student of students){
    console.log(student);
}