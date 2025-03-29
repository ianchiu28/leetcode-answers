class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

    push(value) {
        this.#stack.push(value);
    }

    pop() {
        return this.#stack.pop();
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
    }

    size() {
        return this.#stack.length;
    }

    isEmpty() {
        return this.#stack.length === 0;
    }
}

var MyQueue = function() {
    this.stack = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Make reserved stack
    const reversedStack = new Stack();
    while (!this.stack.isEmpty()) {
        reversedStack.push(this.stack.pop());
    }

    // Get the value
    const front = reversedStack.pop();

    // Rollback
    while (!reversedStack.isEmpty()) {
        this.stack.push(reversedStack.pop());
    }

    return front;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Make reserved stack
    const reversedStack = new Stack();
    while (!this.stack.isEmpty()) {
        reversedStack.push(this.stack.pop());
    }

    // Get the value
    const front = reversedStack.peek();

    // Rollback
    while (!reversedStack.isEmpty()) {
        this.stack.push(reversedStack.pop());
    }

    return front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.isEmpty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */