let p1={name:"Hong",age:30}

class Person{
    constructor(name,age){
        this._name=name;
        this._age=age; //_언더바 의미 private
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
    get age(){
        return this._age;
    }
    set age(age){
        return this._age=age;//물어보기 자바할때는 get set 메소드 로 하고 해서 불러오거나 할떄 set머시지 하고 했었고 프라이빗일떄
        //그리고 만약 프라이빗 아니면 또 똑같이 사용하면되는건지
    }
}
let p2=new Person("Park",30);
p2.name="Choi";
p2.age=25;
console.log(`name: ${p2.name} age:${p2.age}`);
let p3=new Person("kim",30);

function Student(name,grade,age){
    this._name=name;
    this._grade=grade;
    this.age=age;
}
class mem{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
}
new mem("choi",30);
console.log(mem.name+","+mem.age);
let s1=Student("Park",3,10);
let s2=Student("Hong",4,11);
let s3=Student("Hwang",5,12);
