var queue = [];

queue.push("Hello!");
queue.push("Bye!");
queue.push("Money!");
queue.shift();
queue.shift();
queue.shift();
queue.unshift("First");
queue.unshift("Second");
queue.unshift("Third");
queue.pop();
queue.pop();
console.log(queue);
