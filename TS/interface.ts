interface User {
    name: string,
    age: number,
    startTrail: () => string,
    getCoupen(coupenName: string, id: number): number
}

const newUser: User = {
    name: "sundar", age: 26, startTrail: () => { return "hello"; }, getCoupen(name: "hello coupen", id: 345) {
        return 33;
    },
   
}


console.log("newUser", newUser);