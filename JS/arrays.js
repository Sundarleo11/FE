var arr=["abc",23,"test",true,34.0];

console.log(arr);


arr.unshift("new key");
console.log(arr);
arr.shift();
console.log(arr);

arr.pop();
console.log(arr);
arr.push("test key");
console.log(arr);

console.log(arr.indexOf("test key"));

var str="new elemenet";

console.log(Array.from(str));