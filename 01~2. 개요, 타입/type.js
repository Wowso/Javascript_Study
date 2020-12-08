// 수는 정수타입이 아니고 실수 타입
console.log(3/2);

// 정수처럼 사용
console.log(Math.floor(3/2));

// 소수점 더하기의 오류
console.log(0.1+0.2);

// 소수점 오류 보정방법 두가지
console.log(Math.round((0.1+0.2)*1e12)/1e12); 
console.log((0.1+0.2).toFixed(12));

// Math 의 사용
console.log(Math.sin(3.5));
var circumference = 2 * Math.PI * 3;
console.log(circumference);

// parseInt의 사용
console.log(parseInt('123',10));
console.log(parseInt('010',10));

console.log(parseInt('010'));
console.log(parseInt('0x10'));

console.log(parseInt('11',2));

// + 를 이용해 문자열을 숫자로 바꾸기
console.log(+ '99');
console.log(+ '010');
console.log(+ '0x10');

// NaN 이란
console.log(parseInt('hello', 10));
console.log(NaN+5);
console.log(isNaN(NaN));

// Infinity와 -Infinity
console.log(1 / 0);
console.log(-1 / 0);

// isFinite의 사용
console.log(isFinite(1/0));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

