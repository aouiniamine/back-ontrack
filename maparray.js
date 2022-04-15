// recreation map function

let arraytest = [1, 2, 5];

let map = (array, callback) => {
    let result = [];
    for (let i in array) {
        result.push(callback(array[i]));
    }
    return result;
}

console.log(map(arraytest, x => x * 2), "expected => [2, 4, 10]")