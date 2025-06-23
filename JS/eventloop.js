
const uno = () => {
    console.log("I am uno");
}
const dos = () => {
    setInterval(() => {
        console.log("wooo");
    }, 3000)
    console.log("I am dos");

}

const tres = () => {
    console.log("I am tres");
}

uno();
dos();
tres();