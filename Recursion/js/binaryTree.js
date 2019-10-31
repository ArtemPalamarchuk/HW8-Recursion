class BinaryTree {
	constructor(){
		this.root = null;
	}
}

class BinaryTreeNode {
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

const binaryTree = new BinaryTree();
const binaryTreeNode = new BinaryTreeNode();

BinaryTree.prototype.push = function (element) {
	const noda = new BinaryTreeNode(element);
	if (this.root == null){
		this.root = noda;
		return;
	}
	const tmpNoda = this.root;
	if(tmpNoda.left == null){
		tmpNoda.left = noda;
	}
};

