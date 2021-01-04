# 자바스크립트
## 9. 사용자 정의 객체
* javascript는 프로토타입 기반 언어이기 때문에 class구문이 없다.
* function을 class대신 사용한다.
<br/>

#### Person 객체 선언 예제

```javascript
function makePerson(first, last){
    return(
        first: first,
        last: last
    )
}
function personFullName(person){
    return person.first + ' ' + person.last;
}

function personFullNameReversed(person){
    return person.last + ', ' + person.first;
}

var s = makePerson("simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"

```

위처럼 객체를 선언할 수 있다. <br/>
하지만 이와 같은 방법은 보기 좋지 않다. 다음과 같은 방법으로 간소화가 가능하다.

#### 객체 선언 간소화 방법
```javascript
function makePerson(first, last){
    return{
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

```

함수 안쪽에서 this를 이용하여 현재 객체를 참조 할 수 있다.
객체는 객체이름.함수 로 사용한다. 
만약 dot표기법을 사용하지 않는다면 다음과 같은 문제가 발생한다.

#### dot 표기법을 사용하지 않는 경우
```javascript
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined

```
s.fullName() 을 이용하지 않고 fullName() 을 단독으로 사용하면, 'this'는 전역 객체로 묶이게 된다. first와 last로 정의된 전역변수가 없기 때문에 undefined가 발생한다.
<br/>

다음의 방법은 makePerson함수를 'this'키워드를 이용해 개선하는 방법이다.
#### this 키워드를 이용한 간소화 방법
```javascript
function Person(first, last){
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    };
}
var s = new Person('Simon', 'Willison');
``` 
new를 이용해서 새로운 객체를 선언 할 수 있음.
개선된 함수는 여전히 fullName() 을 단독으로 사용 할 때 함정이 존재함.
위의 방법은 person계열의 객체를 만들때마다 내부의 2개의 함수를 만들고 있음.
다음은 내부의 함수를 객체간에 공유하는 방법이다.

#### 내부의 함수를 객체간에 공유하는 방법
```javascript
function personFullName()
{
    return this.first + ' ' + this.last;
}

function personFullNameReversed(){
    return this.last + ', ' + this.first;
}

function Person(first, last){
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}
```
위와 같은 방법은 메소드 함수를 한번만 만들고, 컨스트럭터 내에 해당 메소드를 참조하도록 하는 방법이다. 이보다 더 개선 할 수 있다.

#### 개선된 내부의 함수를 객체간에 공유하는 방법
```javascript
function Person(first, last){
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};

Person.prototype.fullNameReversed = function(){
    return this.last + ', ' + this.first;
};
```

Person.prototype은 모든 Person 인스턴스간에 공유되는 객체이다. 
Person 객체의 설정되지 않은 속성에 접근을 시도할 때마다, Person.prototype에 그 속성이 존재하는지 살펴본다. 따라서 Person.prototype에 할당된 모든 것은 this 객체를 통해 접근이 가능하다.
<br/>

그리고 임의의 prototype을 프로그램 내에서 언제든 변형할 수 있다. 즉, 이미 존재하는 객체에 실시간으로 추가적인 메소드를 추가할 수 있다.

#### 객체에 메소드를 추가하는 방법
```javascript
var s = new Person("Simon", "Willison");
s.firstNameCaps();

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
};
s.firstNameCaps(); // "SIMON"
```

Javascript의 빌트인 객체의 prototype에도 메소드를 추가할 수 있다. 
다음은 String 객체에 메소드를 추가하는 예제이다.

#### String 객체에 메소드를 추가하는 예제
```javascript
var s = "Simon";
s.reversed();

Stirng.prototype.reversed = function(){
    var r = "";
    for(var i = this.length - 1; i >=0; i--){
        r += this[i];
    }
    return r;
};

s.reversed(); //nomiS

"This can now be reversed".reversed(); // desrever eb won nac sihT
//문자열 상수에서도 동작 함.
```

다음과 같이 toString 메소드를 추가하여 객체를 문자열로 나타낼 수 있다.



```javascript
var s = new Person("Simon", "Willison");
s.toString();

Person.prototype.toString = function() {
    return '<Person: '+ this.fullName() + '>';
}

```

#### apply를 이용한 객체를 생성하는 방법
```javascript
function trivialNew(constructor, ...args){
    var o = {}; // 빈 객체를 생성
    constructor.apply(o, args);
    return o;
}

```

이와 같은 방법은 또 다른 객체 생성 방법이다. 
하지만 prototype 체인을 설정하지 않으므로 new를 완벽하게 대체할 수 없다.
...arg는 "rest arguments"라고 불린다. 이것은 매개변수의 나머지를 포함한다.

이 방법은
```javascript
var bill = trivialNew(Person, 'William', 'Orange');

```
또는
```javascript
var bill = new Person('William', 'Orange');

```
와 거의 동일하다.


apply() 와 비슷하게 this를 다시 설정할 수 있게 하는, call 이라는 이름의 자매 함수가 있다. 인자로 단일 배열이 아닌 확장된 인자 목록을 입력받는다.

```javascript
function lastNameCaps() {
    return this.last.toUpperCase();
}

var s = new Person('Simon','Willison');
lastNameCaps.call(s);
//위의 구문은 다음과 같다.
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();
```


# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
