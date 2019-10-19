class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null; 
	}

	appendChild(node) {
		if (!this.left){
			this.left = node;
			node.parent = this;
		}else if (!this.right){
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if(this.left === node) {
			this.left = null;
			node.parent = null;
		}
		else if(this.right === node) {
			this.right = null;
			node.parent = null;
		}
		else throw new Error('The node is not a child.');
	}

	remove() {
		if (this.parent){	
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent === null) return;
		else{
			let root = this.parent.parent;
			let parent = this.parent;
			let left = this.left;
			let right = this.right;			
            this.parent = root;
 
            if (parent.left === this){
				this.left = parent;
				this.right = parent.right;
				if(this.right) this.right.parent = this;
			}else if (parent.right === this){
				this.right = parent;
				this.left = parent.left;
				if (this.left)  this.left.parent = this;
			}

			if (root){
				if (root.left === parent) root.left = this;
				else if (root.right === parent) root.right = this;
			}

			if (left){
				left.parent = parent;
			}

			if (right){
				right.parent = parent;
			}

			parent.parent = this;
			parent.left = left;
			parent.right = right;
		}
	}
}

module.exports = Node;
