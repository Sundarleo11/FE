

function test(val: string | number): string | number {
  if (typeof val === 'string') {
    return `String value: ${val}`;
  } else if (typeof val === 'number') {
    return `Number value: ${val}`;
  }
  throw new Error('Invalid type');
}


interface User {
  id: number;   
  name: string;
}

interface Admin {
    id:number;
    name: string;
    email: string;
}

function isUser(account: User | Admin){
  if ('email' in account) {
    console.log(`Admin: ${account.name}, Email: ${account.email}`);
  } else {
    console.log(`User: ${account.name}`);
  }
}

function islogOff(val:Date | string){
    if (val instanceof Date) {
        console.log(`Date: ${val.toISOString()}`);
    } else if (typeof val === 'string') {
        console.log(`String: ${val}`);
    } else {
        throw new Error('Invalid type');
    }
}