var name = 'Jinsu';

if(name == 'Dog')
{
    name += ' woof';
}else if(name == 'Jinsu'){
    name += ' help';
}
else {
    name += '?';
}
console.log(name);

var count = 0;
while(count < 2)
{
    console.log(count++);
}



for(var i = 0; i < 5; i++)
{
    console.log(i);
}
var array = [1,2,3,4];

for(let value of array)
{
    console.log(value)
}

for(let property in Object)
{
    //object의 항목(property)으로 작업을 실행
}

console.log("short-circuit");
for(let i = 0; i< 10; i++)
{
    if((i>5)&&(i>0))
    {
        console.log(i);
    }
}

for(let i = 0; i< 10; i++)
{
    if((i<5)||(i+=5))
    {
        console.log(i);
    }
}

var age = 19;
var allowed = (age > 18) ? "yes" : "no";
console.log(allowed);

var action = 'win'
switch(action){
    case 'win':
        console.log("win");
        break;
    case 'lose':
        console.log("lose");
        break;
    default:
        console.log("nothing");
}

switch(2 + 2){
    case 3 + 1:
        console.log("ok");
        break;
    default:
        console.log("nope");
}