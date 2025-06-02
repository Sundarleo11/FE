/*const User={
    name:"user name",
    age:"20",
    email:"abc@gmail.com",
    isActive:true
}*/

//type alisae
type User={
 name:string,
 age:number,
 emial:string,
 isActive:boolean,
}


function CreateUser({name:string, ispaid:boolean}){}


let newuser={name:"sundar", ispaid:false,emial:"abc@gmail.com" }

CreateUser(newuser)

export {};