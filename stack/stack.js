class Node{
	constructor(value){
		this.value = value
		this.next = null;

	}
}

class MyStack{
	constructor(){
		this.top = null,
		this.bottom = null;
		this.length = 0;
	}
	peek(){
		return this.top;
	}
	push(value){
		const newNode = new Node(value);
		if(this.length === 0){
			this.top = newNode;
			this.bottom = newNode;
		}else{
			const holdingPointer = this.top;
			newNode.next = holdingPointer;
			this.top = newNode;
		}
		this.length ++;
		return this;
	}
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);