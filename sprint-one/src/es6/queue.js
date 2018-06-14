class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  enqueue(val) {
    this[this.last] = val;
    this.last++;
  }

  dequeue() {
    var value = this[this.first];
    this.first++;
    return value;
  }

  size() {
    var size = this.last - this.first;
    return size<0 ? 0 : size;
  }
}

var newInstance = new Queue();