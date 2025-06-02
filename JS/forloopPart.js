
var state = [
    "one",
    "two",
    3,
    "foure",
    "five"
]


//state.forEach((s)=>(console.log("s=>",s)));

//to access for Array method value
for (const s of state) {
    console.log("state ",s);
    
}

//To access object key and value
const obj={
    name:"sundar",
    age:"24",
    DOB:1999

}

//access object key and value
for (const key in obj) {
      console.log(`Access object ${key} and value : ${obj[key]}`)
      //console.log("obj[key]",obj[key]);
       
        
   
}


