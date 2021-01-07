# 자바스크립트
## 11. 클로저 (Closure)
* 클로저는 함수와 함수안의 환경을 기억한다.

```javascript
function makeAdder(a){
    return function(b){
        return a + b;
    };
}

var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); //11
add20(7); //27
```
보통은 makeAdder 함수가 끝나면 a의 변수도 사라지는것이 일반적이다.
하지만 위의 코드에서는 다르다. return으로 함수를 넘겨주면서 클로저를 생성하기 때문이다.
클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
따라서 클로저 add5와 add20은 각각 5, 20의 a를 가지게 된다.
실행해보면 add5(6)와 add20(7)에서 각각 11, 27을 출력하는 것을 볼 수 있다.
이처럼 클로저는 같은 함수 정의를 공유하지만 서로 다른 어휘적 환경을 가지게 된다.

#### 클로저를 통한 은닉화

자바와 같은 몇몇 언어들은 메소드를 프라이빗으로 선언할 수 있는 기능이 존재한다.
하지만 javascript에서는 이런 방법을 지원하지 않는다. 대신 클로저를 이용하여 프라이빗 메소드를 흉내낼 수 있다.
먼저 프라이빗하지 않은 prototype로 메소드를 선언한 예제를 살펴보자.

```javascript
function makeAdder(a){
    this._value = a;
}

makeAdder.prototype.Adder = function(b) {
    return this._value + b;
}

var add5 = new makeAdder(5);
var add20 = new makeAdder(20);

add5.Adder(5); //10
add20.Adder(7); //27
add5._value = 10;
add5.Adder(5); //15
```

prototype을 이용한 메소드에서는 makeAdder안의 변수에 접근이 가능하여 값을 바꾸는게 가능하다. 반면에 클로저를 사용하면 프라이빗하게 사용할 수 있다. 다음의 예제를 살펴보자.

```javascript
function makeAdder(a){
    var _value = a;
    return function(b){
        return _value + b;
    };
}

var add5 = makeAdder(5);
var add20 = makeAdder(20);

makeAdder(5); //10
makeAdder(7); //27
```

위의 예제에서는 _value에 접근할 방법이 없다. 따라서 클로저를 이용하면 은닉화가 쉽게 이뤄진다.

#### 메모리 누출

클로저를 사용하면 쉽게 메모리가 누출될 수 있다. 클로저를 사용하면 내부 변수를 참조하는 동안에는 해당 메모리를 회수 하지 않기 때문이다. 따라서 클로저의 사용이 끝나면 참조를 제거해야 한다.

```javascript
function makeAdder(a){
    var _value = a;
    return function(b){
        return _value + b;
    };
}

var add5 = makeAdder(5);
var add20 = makeAdder(20);

makeAdder(5); //10
makeAdder(7); //27

//메모리 누출을 막기위해 클로저의 참조를 제거한다.
add5 = null;
add20 = null;
```

# 출처
1. [JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
2. [클로저 - Javascript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
3. [JavaScript 클로저(Closure)](https://hyunseob.github.io/2016/08/30/javascript-closure/)