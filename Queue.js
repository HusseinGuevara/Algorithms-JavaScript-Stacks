class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}    
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue() {
        if(!this.first) return null;
        if(this.first === this.last) {
            this.last = null;
        }
        var temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}
var queue = new Queue();
queue.enqueue("First!");
queue.enqueue("Second!");
queue.enqueue("Third!");
queue.enqueue("Fourth!");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);