class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    addBranch(val) {
        if (val > this.val) {
            if (!this.right) {
                this.right = new BinaryTree(val);
                return;
            }
            else {
                this.right.addBranch(val)
                return;
            }
        }
        if (val < this.val) {
            if (!this.left) {
                this.left = new BinaryTree(val);
                return;
            }
            else {
                this.left.addBranch(val)
                return;
            }
        }
    }
    searchVal(val) {
        if (val === this.val) return val;
        else if (val > this.val) {
            if (!this.right) return 'Number is not found';
            else return this.right.searchVal(val);
        }
        else if (val < this.val) {
            if (!this.left) return 'Number is not found';
            else return this.left.searchVal(val)

        }
    }
}

let tree = new BinaryTree(5);
tree.addBranch(3);
tree.addBranch(4);
tree.addBranch(2)
tree.addBranch(7);
tree.addBranch(8);
tree.addBranch(6);
// console.log(tree.searchVal(7), 'expacted => 4')

export default BinaryTree;