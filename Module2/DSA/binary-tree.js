class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = new BinaryTreeNode(data);
    }

    findPlace(valueToInsert, currentNode) {
        if (valueToInsert <= currentNode.value) {
            if (currentNode.left) {
                currentNode = currentNode.left;
                this.findPlace(valueToInsert, currentNode);
            } else {
                currentNode.left = new BinaryTreeNode(valueToInsert);
            }
        } else {
            if (currentNode.right) {
                currentNode = currentNode.right;
                this.findPlace(valueToInsert, currentNode);
            } else {
                currentNode.right = new BinaryTreeNode(valueToInsert);
            }
        }
    }

    addNode(...el) {
        el.forEach((val) => {
            this.findPlace(val, this.root);
        });
    }

    find(el) {
        let found;
        const dfs = (currentNode) => {
            if (!currentNode) {
                return;
            }

            if (currentNode.value === el) {
                found = currentNode;
            }

            dfs(currentNode.left);
            dfs(currentNode.right);
        };

        dfs(this.root, el);

        return found || false;
    }
}

const tree = new BinaryTree(10);
tree.addNode(5, 12, 4, 11, 6, 13);
console.log(tree.find(5));
