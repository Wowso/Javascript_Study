let a;
let name = 'Jinsu';

try
{
    console.log(myValue); //myValue is not defined
}catch(e)
{
    console.log(e); 
}

for(let myValue = 0; myValue <5; myValue++){
    console.log(myValue);
}

const Pi = 3.14;
try
{
    Pi = 1; //상수이기때문에 오류
}catch(e)
{
    console.log(e);
}

var a2;
var name2 = 'Jinsu';

console.log(myValue2); //undefined
for(var myValue2 = 0; myValue2 <5; myValue2++){
    console.log(myValue2);
}
console.log(myValue2); //5

//연산자
var x=0,t=2;
console.log(x += t);
console.log(x = x + 2);

console.log(x++); //4 출력 후 5
console.log(x--); //5 출력 후 4

console.log(++x); //4 증감 후 5 출력
console.log(--x); //5 감소 후 4 출력

console.log('hello' + 'world');

console.log('9' + 4 + 2); //942
console.log(2+ 1 + '4'); // 34

console.log(111 == '111');
console.log(1 == true); 

console.log(111 === '111');
console.log(1 === true);