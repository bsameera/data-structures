
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];// fix me

  extend(newTree, treeMethods);
  //console.log(newTree);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    var result = this.children[i].contains(target);
    if (result === true) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

