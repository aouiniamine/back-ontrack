// sum each account and display the richest client

// example :  richestclient([[1, 3, 5], [2,5,7]]) => 14

let rechestclient = function (clients) {
    let richestaccount = 0;

    for (let accountid in clients) {
        let accountworth = 0;
        for (let money in clients[accountid]) {
            accountworth += clients[accountid][money];
        };

        if (accountworth > richestaccount) { richestaccount = accountworth };
    };

    return richestaccount;
};

let accounts = [[1, 2, 8], [7, 3, 9]]
let accounts1 = [[2, 3, 6], [4, 5]]

console.log(rechestclient(accounts), "expected => '19'")
console.log(rechestclient(accounts1), "expected => '11'")