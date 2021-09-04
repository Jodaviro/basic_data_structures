class Node{
	constructor(value){
		this.value = value;
		this.next = null;
    this.prev = null;
	}
}
class MyDoubleLinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null,
      prev: null,
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
		this.tail = newNode	 
		this.length ++; 

		return this;
	}
	preprend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length ++;

		return this;
	}
	insert(index, value){
		const newNode = new Node(value);
		const firstPointer = this.getTheIndex(index -1);
		const holdingPointer = firstPointer.next;
		firstPointer.next = newNode;
		newNode.next = holdingPointer;
		newNode.prev = firstPointer;
		const nextPrevPointer = this.getTheIndex(index + 1);
		nextPrevPointer.prev = newNode
		this.length ++;
		
		return this;
	}
	getTheIndex(index){
		if(index >= 0){
			let counter = 0
			let currentNode = this.head;
	
			while(counter !== index){
				currentNode = currentNode.next;
				counter++;
			}
	
			return currentNode
		}else{
			return this.head
		}
	}
	remove(index){
		if(index > 0 ){
			const firstPointer = this.getTheIndex(index -1);
			const nextNode = this.getTheIndex(index + 1)
			firstPointer.next = nextNode
			this.length --;

		}else{
			const nextNode = this.getTheIndex(index + 1)
			this.head = nextNode;
			this.length --;
		}
		return this;
	}
}

let myLinkedList = new MyDoubleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.insert(2, 3);
myLinkedList.preprend(0)

myLinkedList.remove(0);