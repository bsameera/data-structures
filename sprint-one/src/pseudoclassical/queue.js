var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.last = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  var value = this[this.first];
  this.first++;
  return value;
};

Queue.prototype.size = function() {
  var size = this.last - this.first;
  return size < 0 ? 0 : size;
};

var newInstance = new Queue();

