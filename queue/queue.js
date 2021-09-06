class Node{
	constructor(value){
		this.value = value
		this.prev = null;

	}
}

class Queue{
	constructor(){
		this.first = null;
		this.last = null,
		this.length = 0;
	}
	peek(){
		return this.first;
	}
	enqueue(value){
		const newNode = new Node(value);
		if(this.length === 0){
			this.last = newNode;
			this.first = newNode;
		}else if(this.length === 1){
			const holdingPointer = this.last;
			holdingPointer.prev = newNode;
			this.last = newNode;
			this.first.prev = newNode
		}else{
			const holdingPointer = this.last;
			holdingPointer.prev = newNode;
			this.last = newNode;
		}
		this.length ++;
		return this;
	}
	dequeue(){
		const removedNode = this.first
		if(this.length < 1){
			this.last = null;
			this.first = null;
		}else{
			this.first = removedNode.prev;
		}
		this.length --;
		return removedNode;
	}
}

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4);
myQueue.pop()