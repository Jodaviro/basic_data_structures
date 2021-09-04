// const array = ['Diego', 'Karen', 'Oscar'];

class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}
	get(index){
		return this.data[index];
	}
	push(item){
		this.data[this.length] = item;
		this.data[this.length ++];
		return this.data;
	}
	pop(){
		this.length --
		const deletedElement = this.data[this.length];
		delete this.data[this.length];
		return deletedElement;
	}
	delete(index){
		const item = this.data[index];
		this.shiftIndex(index);

		return item;
	}
	shiftIndex(index){
		for (let i = index; i < this.length - 1; i ++){
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length --;
	}	
	shift(){
		const item = this.data[0];
		delete this.data[0];
		this.shiftIndex(0);
		return item
	}
	unshift(item){
		this.shiftIndexReverse()
		this.data[0] = item

		return this.length
	}
	shiftIndexReverse(){
		
		for(let i = this.length; i > 0; i --){
			this.data[i] = this.data[i - 1];
		}
		this.length ++;
	}
}

const myArray = new MyArray();

myArray.push('David');
myArray.push('Adriana');
myArray.push('Gela');
myArray.push('Octavio');
myArray.unshift('Vaca')

myArray.shift()
myArray.delete(1)
myArray.get(1);
myArray.pop();

