const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize=30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
		this.length = 0;
	}

	push(data, priority) {
		if (this.length === this.maxSize) throw new Error('The queue is full');
		else{
			this.heap.push(data, priority);
			this.length++;
		}
	}

	shift() {
		if(!this.length) throw new Error('The queue is empty');
		else{
			this.length--;
			return this.heap.pop();
		}

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return !this.length;
	}
}

module.exports = PriorityQueue;
