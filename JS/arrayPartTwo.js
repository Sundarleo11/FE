function even(e) {
    if (e % 2 === 0) {
        return true;
    }
    return false
}

console.log(even(5));


var odd = function (e) {

    return e % 2 !== 0;
}

var result = odd(6);
console.log(result);


var results = [2, 4, 6, 8, 1].every((e) => (e % 2 === 0));
console.log(results);
