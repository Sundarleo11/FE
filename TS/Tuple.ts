let tuser:[string,number,boolean];
tuser=["abc",123,true];
console.log(tuser);

type User=[number,string,boolean];

const Newuser:User =[134,"habc",false];

Newuser[1]="abcd";
Newuser.push(true);
console.log( "new user Tuple", Newuser);