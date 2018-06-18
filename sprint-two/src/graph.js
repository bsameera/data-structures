

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[node];
  }
  for (var key in this.edges) {
    if (this.edges[node] !== undefined) {
      var otherNode = this.edges[node][1];
      delete this.edges[node];
      delete this.edges[otherNode];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.edges) {
    if (this.edges[fromNode] !== undefined && this.edges[toNode] !== undefined) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode]===undefined && this.edges[toNode]===undefined) {
    this.edges[fromNode] = [fromNode, toNode];
    this.edges[toNode] = [toNode, fromNode];
    this.nodes[toNode] = toNode;
    this.nodes[fromNode] = fromNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)===true) {
    delete this.edges[fromNode];
    delete this.edges[toNode];
    delete this.nodes[toNode];
    delete this.nodes[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
  for (var edge in this.edges) {
    cb(edge);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



