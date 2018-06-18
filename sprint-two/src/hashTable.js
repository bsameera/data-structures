
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var innerArr = [];
  innerArr.push(k, v);

  if (this._storage[index] === undefined) {
    this._storage.set(index, innerArr);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function () {
    storage.splice(0, 2);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


