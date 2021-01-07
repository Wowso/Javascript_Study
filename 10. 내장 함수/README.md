# 자바스크립트
## 10. 내장 함수(Inner functions)
* 다른 함수의 내부에서 Javascript 함수를 선언할 수 있음.
* 중첩 함수의 중요한 점은 부모 함수 범위의 변수에 접근할 수 있다는 것.
<br/>

#### 내장 함수의 예
```javascript
function parentFunc(){
    var a = 1;

    function nestedFunc(){
        var b = 4;   // parentFunc은 사용할 수 없는 변수
        return a + b;
    }
    return nestedFunc();
}
```

유지관리가 쉬운 코드를 작성하고자 할때 이 특성이 굉장히 유용함.
한개 혹은 두개 정도의 함수에서만 호출되며 전체 코드중 다른 부분에서는 사용처가 없는 함수라면 그 함수 내에 해당 함수를 중첩시키는것이 좋음.
이런 방법으로 전역함수의 갯수를 늘리지 않도록 하는 것은 좋은 습관임.

<br/>

그리고 전역 변수를 쓰지 않아도 되는 좋은 대안이 됨. 
예를들어 복잡한 코드를 쓸때, 다양한 함수들간에 값을 공유할 수 있도록 전역 변수를 사용하게 됨.
전역변수는 코드 유지 보수를 어렵게 만듦. 중첩 함수는 그 부모 함수의 범위에서 변수를 공유할 수 있으므로, 전역 변수를 만들지 않더라도 변수를 공유 할 수 있음.

# 출처
[JAVASCRIPT듀토리얼](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
