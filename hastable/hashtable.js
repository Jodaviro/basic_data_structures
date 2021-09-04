
class HashTable{
	constructor(size){
		this.data = new Array(size);
	}
	hashMethod(key){
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key, value){
		const address = this.hashMethod(key);
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}
	get(key){
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if(currentBucket){
			for(let i = 0; i < currentBucket.length; i ++){
				if(currentBucket[i][0] === key){
					return currentBucket[i][1];
				}
			}
		}
		return undefined
	}
	delete(key){
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if(currentBucket){
			for(let i = 0; i < currentBucket.length; i ++){
				if(currentBucket[i][0] === key){
					const deletedValue = currentBucket[i][1]
					delete this.data[address];
					return deletedValue
				}
			}
		}
		return undefined
	}
	getKey(value){
		for(let i in this.data){
			if(this.data[i][0][1] === value){
				return this.data[i][0][0]
			}
		}
		return undefined
	}
	getKeys(){
		const keys = []
		for(let i in this.data){
			keys.push(i)
		}
		return keys
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('Oscar', 1985)
myHashTable.set('Gela', 1991)
myHashTable.set('David', 1988)
myHashTable.set('Mariam', 1987)
myHashTable.getKey(1985)
myHashTable.getKeys()
myHashTable.delete('David')