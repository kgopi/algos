class DataNode{
    constructor(num){
        this.num = num;
    }
}

class BST {

    add(num){
        let newNode = new DataNode(num);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.placeNode(this.root, newNode);
        }
        return this;
    }

    placeNode(baseNode, newNode){
    
        if(baseNode == null){
            return true;
        }

        if(newNode.num > baseNode.num){
            if(this.placeNode(baseNode.right, newNode)){
                baseNode.right = newNode;
            }
        }else{
            if(this.placeNode(baseNode.left, newNode)){
                baseNode.left = newNode;
            }
        }
    }

    remove(num){
        let currentNode = this.root, lastVisitNode = null;
        while(currentNode){
            if(currentNode.num == num){
                if(lastVisitNode == null){
                    this.root.left = null;
                    this.root = currentNode;
                }else{
                    lastVisitNode.left = currentNode.left;
                    currentNode.left.right = currentNode.right;
                }
                break;
            }else if(num > currentNode.num){
                lastVisitNode = currentNode;
                currentNode = currentNode.right;
            }else{
                lastVisitNode = currentNode;
                currentNode = currentNode.left;
            }
        }
    }

    preOrder(node){

        if(node == null){
            return;
        }

        console.log(node.num);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    inOrder(node){
        if(node == null){
            return;
        }

        this.inOrder(node.left);
        console.log(node.num);
        this.inOrder(node.right);
    }

    postOrder(node){
        if(node == null){
            return;
        }

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.num);
    }

    print(){
        console.log("#############");
        this.inOrder(this.root);
        console.log("#############");
    }

}

let bst = new BST();
bst.add(4).add(2).add(3).add(1);
bst.print();
bst.remove(4);
bst.print();