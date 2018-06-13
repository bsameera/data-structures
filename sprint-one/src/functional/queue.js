var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var value = storage[first];
    first++;
    return value;
  };

  someInstance.size = function() {
    var size = last - first;
    return size<0 ? 0 : size;
  };

  return someInstance;
};
