
let sumItaratedNum = val => {
    if (val === 1) return val;
    return val += sumItaratedNum(val - 1)

}
console.log(sumItaratedNum(5), 'expected => 15')