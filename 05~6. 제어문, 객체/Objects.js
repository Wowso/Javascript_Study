// 빈 객체를 생성하는 두 가지 방법
var obj = new Object();

var obj = {};

var obj = {
    name: "jinsu",
    "for": "Max",
    details:{
        color: "yellow",
        size: 20
    }
}

//속성에 연속적인 접근 방법 두 가지
console.log(obj.details.color);
console.log(obj["details"]["size"]);

//객체 프로토타입(Person)과 프로토타입 인스턴스(me) 생성 예제
function Person(name, age){
    this.name = name;
    this.age = age;
}

var me = new Person('Jinsu', 25);
console.log(me.name);
console.log(me.age);

obj["name"] = "jinsu";
var name = obj["name"];

try{
    obj.for = "Jinsu";  //오류가 나지 않음??
}catch(e)
{
    console.log(e);
}
obj["for"] = "Jinsu";
console.log(obj.for);