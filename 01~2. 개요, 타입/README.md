# 자바스크립트
## 1. 개요

* JavaScript는 유형 및 연산자, 표준 내장 객체 및 메소드가 있는 다중 패러다임, 동적언어이다.
* 클래스 대신 객체 프로토 타입을 사용하여 객체 지향 프로그래밍을 지원.
* 함수형 프로그래밍도 지원.
* 구문은 Java 및 C언어를 기반.

## 2. 타입
* [수(Number)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [문자열(String)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
* [부울(Boolean)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [기호(Symbol)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
* [객체(Object)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
   * [함수(Function)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)
   * [배열(Array)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
   * [날짜(Date)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
   * [정규식(RegExp)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
 * [널(Null)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null)
 * [정의되지 않음(Undefined)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### 2.1. 수 (Numbers)
* 이중정밀도 64비트 형식 IEEE 754 값으로 정의 됨.
* 정수가 존재하지 않음 (BigInt 제외)

##### 2.1.1. 조심해야 할 몇 가지 예제
```javascript
console.log(3/2) // 1이 아닌, 1.5
console.log(Math.floor(3/2)); // 1
```
정수가 아닌 실수로 계산된다.

```javascript
0.1 + 0.2 = 0.30000000000000004
```
위와 같은 오류는 64비트 IEEE 754 형식이 정확한 실수값이 아닌 근사값으로 저장되기 때문에 발생 함.

##### 2.1.2. 여러 내장 함수 사용법

다음과 같이 덧셈, 뺄셈, 계수(또는 나머지) 연산을 포함하는 표준 산술 연산자가 지원됨.
고급 수학 함수와 상수를 다루기 위한 내장 객체 Math가 있음.
```javascript
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```

내장 parseInt()함수를 사용하여 문자열을 정수로 변환할 수 있음.
두번째 매개변수는 문자열을 몇진수로 바꿀건지 정함.
```javascript
parseInt('333', 10); // 333
parseInt('022', 10); // 22
parseInt('010') // 8
parseInt('0x10') // 16

```
두번째 매개변수를 넣지 않았을때 문자열의 시작이 0, 0x라면 각각 8진수, 16진수 표기법이 적용 됨.

```javascript
parseInt('11',2); //3
```
이진수 표기 방법.

단항 연산자 + 를 사용하여 값을 숫자로 변환 할 수 있음
```javascript
+ '22'; //22
+ '010'; //10
+ '0x10'; //16 
```

문자열이 수가 아닌 경우 NaN(Not a Number)를 리턴.
```javascript
parseInt('hello', 10); //NaN
```
NaN이 연산의 입력값으로 주어지면 결과는 NaN.
```javascript
NaN + 10; //NaN
```
내장 isNaN()함수로 NaN 여부 확인
```javascript
isNaN(NaN) // true
```
Infinity와 -Infinity
```javascript
1 / 0; // Infinity
-1 / 0; // -Infinity
```
내장 IsFinite()함수로 Infinity, -Infinity, NaN 값 테스트
```javascript
isFinite(1 / 0); //false
isFinite(-Infinity) //false
isFinite(NaN) //false
```
### 2.2. 문자열(Strings)
* 유니코드 문자들이 연결되어 만들어진 것.

문자열의 길이
```javascript
'hello'.length; //5
```

문자열은 객체로 취급 됨.
```javascript
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); //"goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```

### 2.3. 이외의 타입
* 변수에 값을 주지 않고 선언하는 것이 가능 함. 이 경우 변수의 타입은 undefined.
* true와 false 값을 가질 수 있는 부울 타입이 존재 함.
  1. false, 0, 빈 문자열(""), NaN, null, undefined는 모두 false
  2. 다른 모든 값은 true
```javascript
Boolean(''); //false
Boolean(123); //true
```
# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
