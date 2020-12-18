# 자바스크립트
## 7. 배열(Arrays)
* [] 구문을 사용해서 접근함.
* length 속성을 이용하여 배열의 크기를 구할 수 있음.

배열을 생성하는 방법
```javascript
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length // 3
```

배열 리터럴을 사용해 생성하는 방법
```javascript
var a = ["dog", "cat", "hen"];
a.length // 3
```

array.length는 배열에 들어있는 항목의 수를 반드시 반영하지 않음.
아래와 같은 상황의 경우
```javascript
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length // 101
```
항목의 수와 다르게 101이 나오는 것을 알 수 있음.
length는 무조건 최대 인덱스에 하나를 더한 값이 나옴.

존재하지 않은 배열 인덱스를 참조하는 경우 undefined가 나옴.
```javascript
> typeof(a[90])
undefined
```
배열의 특성을 활용해 for 반복문으로 다음과 같이 처리 할 수 있음.
```javascript
for(var i = 0; i< a.length; i++)
{
    //a[i]로 수행
}
```
ES2015는 좀더 간결한 방법으로 for...of 루프를 사용.
```javascript
for(const currentValue of a){
    // currentValue로 수행
}
```
배열 요소를 반복하는게 아닌 배열 인덱스를 반복 함.
Array.prototype에 새로운 속성을 추가하면, 속성들 또한 루프로 반복 됨. 따라서 이런 반복 형태는 배열에서 추천되지 않음.

ECMAScript 5에 추가된 forEach() 반복 방법.
```javascript
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array)){
    //currentValue나 array[index]로 수행
}

a.push(item); //배열에 항목을 추가하는 방법
```
몇가지 배열 메서드의 사용법.
 [배열 메서드에 대한 전체 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
 </br>
메서드 이름| 설명
-|-|
a.toString() | 각 항목에 대한 toString()의 출력이 콤마로 구분된 한개의 문자열을 반환합니다. |
a.toLocaleString()|각 항목에 대한 toLocaleString()의 출력이 콤마로 구분된 한개의 문자열을 반환합니다.
a.concat(item1[, item2[, ...[, itemN]]])|	item들이 덧붙여진 한개의 배열을 반환합니다.
a.join(sep)|	배열의 값들을 sep 인자로 구분하여 합친 한개의 문자열로 변환합니다.
a.pop()	|배열의 마지막 항목을 반환하면서 제거합니다.
a.push(item1, ..., itemN)|	배열의 끝에 item들을 덧붙입니다.
a.shift()|	배열의 첫번째 항목을 반환하면서 제거합니다.
a.unshift(item1[, item2[, ...[, itemN]]])|	배열의 앞쪽에 item들을 덧붙입니다.
a.slice(start[, end])|	배열의 일부분을 새배열로 반환합니다.
a.sort([cmpfn])|	옵션으로 비교용도의 함수를 입력받습니다.
a.splice(start, delcount[, item1[, ...[, itemN]]])|	배열의 일부분을 제거하고 다른 항목으로 대체하여 배열을 변경합니다..
a.reverse()|	배열의 순서를 거꾸로 배열합니다.

## 8. 함수(Functions)
```javascript
function add(x,y)
{
    var total = x + y;
    return total;
}
```
* 0 이상의 이름이 있는 매개변수를 가질 수 있음.
* return 문을 사용하여 값을 돌려주고 함수를 끝낼 수 있음.
* return 문이 없으면(혹은 값이 없는 리턴), undefined를 돌려줌.

함수가 매개변수를 주지않고 실행 될 경우 undefined를 돌려줌.
```javascript
add(); // NaN
//undefined에 대해 덧셈을 수행할 수 없습니다.

```
함수가 기대하는 매개변수보다 많은 매개변수를 넘겨 주었을 경우.
```javascript
add(2,3,4); // 5
// 처음의 두 수가 더해짐. 4는 무시
```

arguments객체를 이용하여 함수에서 추가적으로 주어진 매개변수를 접근할 수 있음.

```javascript
function add(){
    var sum = 0;
    for(var i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum;
}

add(2, 3, 4, 5); //14
```
이를 이용한 평균계산 함수
```javascript
function avg(){
    var sum = 0;
    for(var i =0, j = arguments.length; i<j i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```
위의 방법을 이용하면 코드가 번잡해 보일 수 있기 때문에 Rest 파라미터 문법으로 대체 할 수 있음.
Rest 파라미터 연산자는 다음과 같은 포맷(...variable)으로 함수 파라미터 목록에 사용됨.
```javascript
function avg(...args){
    var sum = 0;
    for (let value of args){ //args에서 반환되는 값을 사용하기 위해 for..of 루프 사용.
        sum += value;
    }
    return sum / arr.length;
}

avg(2, 3, 4, 5); // 3.5
```
이를 이용하면 코드 크기는 최소한으로 유지하면서, 갯수 제한없이 함수로 인자를 전달할 수 있음.
> rest 파라미터 연산자가 함수 선언의 어느 곳에 위치하든 선언 위치 이후에 모든 인자를 저장한다.
> 즉, function avg(firstValue, ...args) 에서 함수로 전달된 첫번째 값은 firstValue에 저장되며, 이후의 나머지 값은 args에 저장된다.

함수의 매개변수로 배열을 받는 방법.
```javascript
function avgArray(arr){
    var sum = 0;
    for (var i = 0, j = arr.length; i< j; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

avgAArray([2,3,4,5]); // 3.5
```

Javascript의 내장함수 apply()를 이용하여 배열을 넘겨주는 방법.
```javascript
> avg.apply(null, [2,3,4,5])
3.5
```
> 함수 호출시 전개 연산자를 이용하여 똑같은 결과를 얻을수 있음.
> Ex> avg(...numbers)

```javascript
var avg = funtion(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i <j; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}
```
위와 같이 함수를 만들어도 된다. 의미적으로 function avg() 형식과 같다.

다음은 함수 정의를 이용한 블록 유효 범위를 적용 시 킨것 처럼 지역 변수를 숨기는 요령이다.
```javascript
var a = 1;
var b = 2;

(function() {
    var b = 3;
    a += b;
})();

a; // 4
b; // 2
```

Javascript는 재귀적으로 함수를 부를 수 있음. 브라우저 DOM 등에서 볼수 있는 트리구조를 다루는데 유용함.
```javascript
function countChars(elm){
    if(elm.nodeType == 3){// TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++){
        count += countChars(child);
    }
    return count;
}
```

익명 함수를 사용함에 있어 잠재적인 문제점. 이름이 없으면 재귀적으로 부르는 방법.
```javascript
var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++){
        count += counter(child);
    }
    return count;
})(document.body);

```
위와 같이 함수 표현식에 제공된 이름은 함수 자체 범위에서만 유효함.
이 특징은 엔진에의한 최적화뿐만 아니라 코드 가독성을 높이는데 도움을 줌. 디버거와 스택 추적에도 나타나므로 디버깅시간을 줄일 수 있게함.

# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
