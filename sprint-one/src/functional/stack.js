var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.pop = function() {
    var value = storage[last - 1];
    last--;
    return value;
  };

  someInstance.size = function() {
    var size = last - first;
    return size > 0 ? size : 0;
  };

  return someInstance;
};
