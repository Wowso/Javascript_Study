# 자바스크립트
## 3. 변수(Variables)
* 변수는 let, const, var 키워드로 선언 됨.

let을 사용시 블록 유효 범위 변수를 선언 함.
```javascript
let a;
let name = 'Jinsu';
```

let의 유효 범위 예제
```javascript
//myValue는 여기에서 유효하지 않음

for(let myValue = 0; myValue < 5; myValue++){
    // myValue는 여기에서 유효 함
}
//myValue는 여기에서 유효하지 않음
```

const는 값이 변경되지 않는 변수를 선언 함.
```javascript
const Pi = 3.14; // 변수 Pi 설정
Pi = 1; // 상수로 설정된 변수는 변경할 수 없기 때문에 오류 발생.
```

var은 가장 일반적인 변수 선언 키워드.
let, const 키워드가 가지는 제한을 var는 갖지 않음.
```javascript
var a;
var name = 'Jinsu';
```
var의 유효 범위 예제
```javascript
//myValue는 여기에서 사용 할 수 있음.
for(var myValue = 0; myValue<5; myValue++){
    //myValue는 함수 전체에서 사용 할 수 있음.
}
//myValue는 여기에서 사용 할 수 있음.
```
변수에 값을 지정하지 않고 변수를 선언하면, 타입은 undefined가 됨.

> 자바스크립트와 다른언어의 중요한 차이점은 블록에 범위가 없다는 것.
> 함수에만 범위가 있다.
> let 및 const 선언을 통해 블록 범위 변수를 만들 수 있음.

## 4. 연산자(Operators)
* 산술 연산자로는 +, -, *, /, %(나머지 연산자)가 있음.
* 값은 = 연산자로 할당 가능. +=와 -=처럼 같이 사용 가능.
```javascript
// 똑같은 결과
x += t;
x = x + 5;

// ++와 --의 사용
//후처리
x++ 
x--
//전처리
++x 
--x
```

[+ 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Addition)로 문자열 붙이기.
```javascript
'hello' + 'world'; //"hello world"
```

문자열에 어떤 수를 더하면 모두 문자열로 바뀜.
```javascript
'9' + 5 + 2; //"952"
4 + 2 + '1'; //"61"
```

비교는 <, >, <=, >=를 통해 가능하다.
이중 등호(==)연산자는 서로 다른 타입을 줄 경우 타입 강제 변환을 하기때문에 기대하지 않은 결과가 나올 수 있음.
```javascript
111 == '111'; //true
1 == true; //true
```

타입 강제 변환을 하지 않으려면 삼중 등호 연산자(===)를 사용.
```javascript
111 === '111'; //false
1 === true; //false
```

이와 비슷한 !=와 !== 연산자가 있음.
좀더 자세한 내용은 [여기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)를 클릭.


# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
