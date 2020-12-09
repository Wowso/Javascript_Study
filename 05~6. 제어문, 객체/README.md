# 자바스크립트
## 5. 제어 구조
* C계열의 다른 언어와 비슷한 제어 구조를 가짐.
* 조건문은 if, else를 지원.
* 원하는대로 중첩하여 사용.

```javascript
var name = 'Jinsu';
if(name == 'Dog')
{
    name += ' woof';
}else if(name == 'Jinsu'){
    name += ' help';
}else {
    name += '?';
}
console.log(name);
```

while 반복문과 do-while 반복문도 사용 가능.
while은 단순 반복에 유용하게 쓰임.
do-while은 반드시 한번이상 실행 되도록 하고 싶을때 사용.
```javascript
while(true)
{
    //무한루프!
}

var input;
do {
    input = get_input();
} while(inputIsNotValid(input));
```
for 반복문은 C와 Java의 반복문과 같음.

```javascript
for(var i = 0; i < 5; i++)
{
    //5번 반복
}
```
또다른 for 반복문 사용법.
for...of 사용.
```javascript
for(let value of array){
    //value로 작업을 실행
}
```
for..in 사용.
```javascript
for(let property in object)
{
    //object의 항목(property)으로 작업을 실행
}
```
&&와 || 연산자는 첫번째 식을 평가한 결과에 따라서 두번째 식을 평가 할 것인지 결정하는 단축평가(short-circuit)논리를 사용.
```javascript
var name = o && o.getName(); //객체에 접근하기 전 NULL 객체인지 검사

var name2 = cacheName || (cacheName = getName()); // (틀린 값이 유효하지 않은 값일때) 캐싱 값에 이용
```
한줄로 조건문을 쓸 수 있게 해주는 삼중 연산자가 있음.
```javascript
var allowed = (age > 18) ? "yes" : "no";
```
switch 문은 숫자나 문자열을 기반으로 다중 분기되는 문장을 작성 할 수 있음.
```javascript
switch(action){
    case 'win':
        winIt();
        break;
    case 'lose':
        loseIt();
        break;
    default:
        doNothing();
}
```
만약 switch 문에서 break를 넣지 않으면 다음 단계로 넘어가서 실행 됨.
```javascript
switch(a){
    case 1: //fallthrough
    case 2:
        eatIt();
        break;
    default:
        doNotiong();
}
```
default는 선택사항.
switch와 case 부분에서 표현식을 사용할 수 있음. === 연산자로 비교 됨.
```javascript
switch(2 + 2){
    case 3 + 1:
        ok();
        break;
    default:
        nope();
}
```

## 6. [객체(Objects)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
* 객체는 간단히 이름-값 쌍의 모임.
* 객체의 값은 객체를 포함하여 아무 Javascript값이 될 수 있음.
* 객체의 이름은 문자열.

빈 객체를 생성하는 두 가지 방법.
```javascript
var obj = new Object();
```
그리고
```javascript
var obj = {};
```
두 식은 의미적으로 동치 임. 
두번째 방법은 객체 리터럴 구문이라고 부르고 편리 함.
객체 리터럴 구문은 JSON 구문의 핵심.

객체 리터럴 구문으로 초기화 하는 법.
```javascript
var obj = {
    name: "Jinsu",
    "for": "Max",
    details: {
        color: "yellow",
        size: 20
    }
}
```
속성에 연속적으로 접근 할 수 있음.
```javascript
obj.details.color; // yellow
obj["details"]["size"]; // 20
```

객체 프로토타입(Person)과 프로토타입의 인스턴스(me) 생성 예제.
```javascript
funtion Person(name, age){
    this.name = name;
    this.age = age;
}

var me = new Person('Jinsu', 25);
// "Jinsu"라는 이름의 25세인 새로운 사람을 생성한다.
```
객체의 속성에 접근하는 두가지 방법.
```javascript
// dot 표기법
obj.name = "Jinsu";
var name = obj.name;
```
그리고
```javascript
// bracket 표기법
obj["name"] = "Jinsu";
var name = obj["name"];

// key를 정의하기 위해 변수도 사용 할 수 있음.
var user = prompt('What is your key?');
obj[user] = prompt('What is its value?');
```
이 둘은 의미적으로 같음. 
두번째 방법은 속성의 이름이 실행시간에 계산될 수 있는 문자열로 주어 짐.
하지만 이 방법을 사용하면 일부 JavaScript엔진과 압축기 최적화를 적용 할 수 없음.
또한 예약된 단어(키워드)로 되어있는 이름으로 객체의 속성을 설정하거나 얻을 수 있음.
```javascript
obj.for = "Jinsu"; // 구문 오류, 예약어 for가 사용되기 때문에
obj["for"] = "Jinsu"; // 정상 동작
```
> ECMAScript 2015 이래로, var userPhone = {}; userPhone[phoneType] = 12345. 처럼 표기하는 대신 {[phoneType]: 12345}와 같은 사용법도 가능 함.


# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
