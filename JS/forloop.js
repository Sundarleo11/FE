
var state = [
    "one",
    "two",
    3,
    "foure",
    "five"
]


for (let i = 0; i < state.length; i++) {
    if (typeof state[i] !== "string") continue;
    console.log("state[i]=", state[i]);
}


let i = 0;

while (i < 10) {
    console.log("i=",i);
    i++;

}


let j=20;

do{
console.log("j",j);
j++;
}while(j<10)
