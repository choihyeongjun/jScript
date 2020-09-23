var sum = 0;
var numbers = [45, 28, 22, 10, 55];
function aryFunc() {
    numbers.forEach(callBackFunc);
    console.log(sum);
    document.getElementById('ary').innerHTML = sum;
}
function callBackFunc(v, i, a) {
    sum += v;
}
var num1=10;
var num1="hello";
console.log(num1);

//let num2=10;
let num2="hello";
console.log(num2);

const num3=10;
let p1={
    name: "Hong",
    age:20
}
let p2={
    name:"Park",
    age:25
}
let p3={
    name:"Choi",
    age:30
}
let persons=[p1,p2,p3];
persons.forEach(function(a,b,c){
    console.log(a,b,c);
    console.log(a.name+", "+a.age);
});

numbers=[45,38,66,92,18,100];
numbers.sort(function(a,b){
    return a-b;//마이너스값나오면 오름차순 정렬  플러스값나오면 내림차순
});

console.log(numbers[0])
console.log("----------------------------");

let newNum=numbers.map(function(a,b,c){
    console.log(" a: "+a+" b: "+b+" c: "+c);
    return a*b;
});

console.log(newNum);

let theNew=newNum.filter(function(a,b,c){
    return a>0;
});
console.log("머고");
let anotherNew=theNew.reduce((a,b,c)=>{
    console.log("a: "+a+" b: "+b+" c: "+c)
    return (a>b)?a:b;
});
 console.log(anotherNew);



console.log(theNew);

numbers.forEach(function(a){
    console.log(a);
    
})
persons.sort(function(a,b){
    //return a.age-b.age;
    if(a.name<b.name)return -1;
    else return 1;
});
persons.forEach((a,b,c) => {  //==function(a,b,c)
    console.log(`value: ${a.name},${a.age},index: ${b}`); //a,b,c
});


