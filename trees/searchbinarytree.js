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
				return this;
			}else{
				const rightNode = this.moveRight(value, root.right);

				if(value !== rightNode.value && value < rightNode.value){
					const leftNodde = this.moveLeft(value, rightNode);
					leftNodde.left = new Node(value);
					this.length ++;
					return this;
				}else if(value === rightNode.value){
					console.error('cannot add duplicate values')
				}else{
					rightNode.right = new Node(value);
					this.length ++;
					return this;
				}
			}
			
		}else if( value < root.value){
			if(! root.left){
				root.left = new Node (value);
				this.length ++;
				return this;
			}else{
				const leftNode = this.moveLeft(value, root.left);
				debugger

				if(value !== leftNode.value && value > leftNode.value){
					const rightNode = this.moveRight(value, leftNode);
					rightNode.right = new Node(value);
					this.length ++;
					return this;
				}else if(value === leftNode.value){
					console.error('cannot add duplicate values')
				}else{
					leftNode.left = new Node(value);
					this.length ++;
					return this;
				}
			}
		}else{
			console.error('Can not add duplicate value')
		}
	}
	moveRight(value, node){
		let right = node
		while(value > right.value && right.right){
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
	search(value){
		const root = this.root;
		if (value > root.value){
			if(! root.right){
				return false;
			}else{
				const rightNode = this.moveRight(value, root.right);
				debugger;
				if(value === rightNode.value){
					return true;
				}else if(value !== rightNode.value && value < rightNode.value){
					let leftNode = this.moveLeft(value, rightNode);
					if(value === leftNode.value){
						return true
					}else {
						return false;
					}
				}else{
					return false;
				}
			}
			
		}else if( value < root.value){

			if(! root.left){
				return false;
			}else{
				const leftNode = this.moveLeft(value, root.left);
				debugger;
				if(value === leftNode.value){
					return true;
				} else if(value !== leftNode.value && value > leftNode.value){
					let rigtNode = this.moveRight(value, leftNode);
					if(value === rigtNode.value){
						return true
					}else {
						return false;
					}
				}else{
					return false;
				}
			}
		}else{
			return true;
		}
	}	
}	

const tree = new BinarySearchTree(10);

tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(7);
tree.insert(35);
tree.insert(31);
tree.insert(44);
tree.insert(41);
tree.insert(3);
tree.insert(1);
tree.insert(5);


