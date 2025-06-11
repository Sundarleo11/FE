const score: Array<number> = [];
const Name: Array<string> = [];

function addscore(val: number | string): Number | string {
  return val;
}

function addscore1(val: any): any {
  return val;
}

function addscore2<T>(val: T): T {
  return val;
}

function addscore3<Type>(val: Type): Type {
  return val;
}



function testorder <T,>(val:T[]):T[]{
  return val;
}

//arrow function
const testOrder=<T,>(val:T[]):T[]=>{
  return val;
}


interface DataBase{
  id: number;
  name: string; 
  connection: string;
}

function addDataBase<T,u extends DataBase>(valOf1:T,valOf2:u): object {
  return {
    valOf1,
    valOf2
  };
}

addDataBase(2, { id: 1, name: "testing", connection: "mysql" }); 


interface Quiz{
  name:string,
  type:string,
}

interface course{
  name:string,
  type:string,
  quiz:Quiz[]
}

class Sellable<T>{
  private cart:T[]=[];

  addToCart(item:T):void {
    this.cart.push(item);
  }
}