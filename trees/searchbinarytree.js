class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree{
	constructor(value){
		this.root = new Node(value);
		this.length = 1;
	}
	insert(value){
		const root = this.root;

		if (value > root.value){
			if(! root.right){
				root.right = new Node(value);
				this.length ++;
			}else{
				const rightNode = this.moveRight(value, root.right);

				if(value !== rightNode.value && value < rightNode.value){
					const leftNodde = this.moveLeft(value, rightNode);
					leftNodde.left = new Node(value);
					this.length ++;
				}else{
					rightNode.right = new Node(value);
					this.length ++;
				}
			}
			
		}else if( value < root.value){
			if(! root.left){
				root.left = new Node (value);
				this.length ++;
			}else{
				const leftNode = this.moveLeft(value, root.left);

				if(value !== leftNode.value && value > leftNode.value){
					const rightNode = this.moveRight(value, leftNode);
					rightNode.right = new Node(value);
					this.length ++;
				}else{
					leftNode.left = new Node(value);
					this.length ++;
				}
			}
			
		}else{
			console.error('Can not add duplicate value')
		}
	}
	moveRight(value, node){
		let right = node
		while(value > right.value && right.right){
			debugger
			right = right.right;
		}
		return right;
	}
	moveLeft(value, node){
		let left = node
		while(value < left.value && left.left){
			left = left.left;
		}
		return left
	}	
	
}

const tree = new BinarySearchTree(10);

tree.insert(15);
tree.insert(18);

tree.insert(4);