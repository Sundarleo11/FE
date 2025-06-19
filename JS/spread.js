
function sum(a,b,...args){
    let sum=0;
    for(const  arg of args){
        sum=sum+arg;
    }
    return [a*b,sum];
}

console.log(sum(2,3,4,5,9,7,8));