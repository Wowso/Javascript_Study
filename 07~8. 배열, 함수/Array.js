var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
console.log(a.length);

var a = ["dog", "cat", "hen"];
console.log(a.length);

var a = ["dog","cat", "hen"];
a[100] = "fox";
console.log(a.length);

console.log(typeof(a[90]));

for(var i = 0; i< a.length; i++)
{
    a[i] = i;
}

for(const currentValue of a){
    a[currentValue]= currentValue;
}

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array){
    array[index] = index;
    console.log(array[index]);
})

a.push('how');

console.log(a.toString());
console.log(a.toLocaleString());