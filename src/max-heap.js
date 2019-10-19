const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		const node = new Node(data, priority)
		this.insertNode(node);
		this.shiftNodeUp(node);	
		this.length++;
	}

	pop() {
		if(this.length){
			this.length--;
		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return !this.length;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		let first = this.parentNodes[0];
		if(!this.root){
			this.root = node;
			this.parentNodes.push(node);
		}else {
			this.parentNodes.push(node);
			first.appendChild(node);
			if(first.left && first.right) this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
