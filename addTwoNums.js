var addTwoNumbers = function (l1, l2) {
    let result = [];
    let [n1, n2] = ["", ""];

    switch (l1.length >= l2.length) {
        case false:
            for (let i in l2) {
                n1 += l1[i].toString();
                n2 += l2[i].toString();
            }
            break;

        default:
            for (let i in l1) {
                n1 += l1[i].toString();
                if (l2[i]) n2 += l2[i].toString();
            }
    }
    let num = Number(n1) + Number(n2);
    num = num.toString()

    for (let i = num.length - 1; i >= 0; i--) {
        result.push(Number(num[i]))
    }

    return result;


};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), "expexted => [7, 0, 8]")
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), "expected => [8,9,9,9,0,0,0,1]")
console.log(addTwoNumbers([0], [0]), "expected => [0]")