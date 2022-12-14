
var MyQueue = function() {
    this.stack = [];
    this.sub = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.stack.length > 0) {
        while (this.stack.length > 0) {
            this.sub.push(this.stack.pop());
        }
    }
    
    this.stack.push(x);
    
    while (this.sub.length > 0) {
        this.stack.push(this.sub.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */