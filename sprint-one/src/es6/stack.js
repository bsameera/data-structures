class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  push(val) {
    this[this.last] = val;
    this.last++;
  }

  pop() {
    var value = this[this.last - 1];
    this.last--;
    return value;
  }

  size() {
    var size = this.last - this.first;
    return size > 0 ? size : 0;
  }
}

var newInstance = new Stack();