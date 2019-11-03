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

BinnaryTree.prototype.search = function (searchEl , nextStep) {

    let tmpNode;
    if(nextStep == undefined){
        tmpNode = this.root;
    }
    else{
        tmpNode = nextStep;
    }

    if(tmpNode.data == searchEl){
        tmpNode.data;
    }
    else if( searchEl < tmpNode.data && tmpNode.left != null ){
        return this.search(searchEl, tmpNode.left)
    }
    else if(searchEl > tmpNode.data && tmpNode.right != null ){
        return this.search(searchEl, tmpNode.right)
    }
    else{

        return searchEl;
    }
};

BinnaryTree.prototype.push = function (el, nextStep)  {
    const noda = new CreateTreeNode(el);
    let tmpNoda;
    if(nextStep === undefined){
        tmpNoda  = this.root;
    }
    else {
        tmpNoda = nextStep
    }

    if(this.root == null){
        this.root = noda;
    }
    else {
        if (el >= tmpNoda.data && tmpNoda.right != null) {
            return this.push(el, tmpNoda.right)
        } else if (el < tmpNoda.data && tmpNoda.left != null) {
            return this.push(el, tmpNoda.left)
        }else if(el >= tmpNoda.data){
            tmpNoda.right = noda;
        }else if(el < tmpNoda.data){
            tmpNoda.left = noda;
        }
    }
};

BinnaryTree.prototype.push = function (el, nextStep)  {
    const noda = new CreateTreeNode(el);
    let tmpNoda;
    if(nextStep === undefined){
        tmpNoda  = this.root;
    }
    else {
        tmpNoda = nextStep
    }

    if(this.root == null){
        this.root = noda;
    }
    else {
        if (el >= tmpNoda.data && tmpNoda.right != null) {
            return this.push(el, tmpNoda.right)
        } else if (el < tmpNoda.data && tmpNoda.left != null) {
            return this.push(el, tmpNoda.left)
        }else if(el >= tmpNoda.data){
            tmpNoda.right = noda;
        }else if(el < tmpNoda.data){
            tmpNoda.left = noda;
        }
    }
};
