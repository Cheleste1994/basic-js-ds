const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}



class Queue {
    constructor () {
      this.start = null;
      this.end = null;
    }

  getUnderlyingList() {
    return this.start
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.end) {
      this.end.next = node;
      this.end = node;
    } else {
      this.start = node;
      this.end = node;
    }

  }

  dequeue() {
    if (!this.start) {
      return null;
    }
    const value = this.start.value;
    this.start = this.start.next;
    if (!this.start) {
      this.end = null;
    }
    return value;

  }
}

module.exports = {
  Queue
};
