class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if(this.size === 0) return null;
        if(this.first === this.last) {
            this.last = null;
        }
        var temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
var stack = new Stack();
stack.push("First!");
stack.push("Second!");
stack.push("Third!");
stack.push("Fourth!");
stack.pop();
stack.pop();
console.log(stack);