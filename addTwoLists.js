class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
    cbTillEnd(cb) {
        cb(this.val)
        if (!this.next) return;
        return this.next.cbTillEnd(cb)

    }
    addNode(val) {
        if (!this.next) { // if next is null
            this.next = new ListNode(val)
            return val;
        }
        return this.next.addNode(val) // if next is a node
    }
}

let list1 = new ListNode(2)
list1.addNode(4)
list1.addNode(3)

let list2 = new ListNode(5)
list2.addNode(6)
list2.addNode(4)

var addTwoNumbers = function (l1, l2) {
    let result;
    let n1 = "";
    let n2 = '';
    l1.cbTillEnd(val => { n1 += val });
    l2.cbTillEnd(val => { n2 += val });
    let num = (Number(n1) + Number(n2)).toString();
    console.log(num)
    for (let i = num.length - 1; i >= 0; i--) {
        if (i === num.length - 1) result = new ListNode(Number(num[i]))
        else result.addNode(Number(num[i]))
    }

    return result;

};

console.log(addTwoNumbers(list1, list2), '7 => 0 => 8')