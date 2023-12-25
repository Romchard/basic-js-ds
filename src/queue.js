const {NotImplementedError} = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    getUnderlyingList() {
        let list = new ListNode(0)
        let cur = list
        for (let i = 0; i < this.length(); i++) {
            cur.next = new ListNode(this.queue[this.head + i])
            cur = cur.next
        }

        return list.next
    }

    enqueue(value) {
        this.queue[this.tail] = value
        this.tail++
    }

    dequeue() {
        if (this.head !== this.tail) {
            this.head++
            return this.queue[this.head - 1]
        } else {
            throw new Error("Empty queue")
        }

    }

    length() {
        return this.tail - this.head
    }
}

module.exports = {
    Queue
};
