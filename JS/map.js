var mymap=new Map();

mymap.set(1,"one");
mymap.set(2,"two");
mymap.set(3,"three");
mymap.set(4,"four");

console.log("map->",mymap);

for(let key of mymap.keys()){
    console.log("key-->",key);
    
}

for(let value of mymap.values()){
    console.log("value-->",value);
    }

    for(let[key,value] of mymap){
        console.log(`map function key ${key} of value ${value}`);
        
    }


    mymap.forEach((k,v)=>console.log(`map function key ${k} and value ${v}`));
    