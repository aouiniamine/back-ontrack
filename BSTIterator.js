import BinaryTree from "./binaryTree.js";

let binaryTree = new BinaryTree(7);
binaryTree.addBranch(3);
binaryTree.addBranch(15);
binaryTree.addBranch(9);
binaryTree.addBranch(20);

class BSTIterator {
    constructor(root) {
        this.sortedNumsInRoot = [];
        this.nextNum = 0;
        this.init(root);
        this.sortedNumsInRoot = this.sortedNumsInRoot.sort((a, b) => a - b)
    }
    next() {
        let next = this.sortedNumsInRoot[++this.nextNum - 1]
        return (next ? next : "there's no next !")

    }
    hasNext() {
        return this.nextNum < this.sortedNumsInRoot.length
    }
    init(node) {
        this.sortedNumsInRoot.push(node.val)
        if (node.left) this.init(node.left)
        if (node.right) this.init(node.right)
    }
}

let sortedBSTree = new BSTIterator(binaryTree); 