// Copyright (c) 2010, Devin Torres <devin@devintorres.com>

var BinarySearchTree = function () {
  this._root = null;
};

var Node = function (value) {
  this.left = null;
  this.right = null;
  this.value = value || null;
};

BinarySearchTree.prototype = {

  add: function (value) {
    var node = this._root;
    if (!node) {
      this._root = node = new Node(value);
      return node;
    }

    do {
      if (value < node.value) {
        if (node.left) node = node.left;
        else {
          node = node.left = new Node(value);
          return node;
        }
      } else if (value > node.value) {
        if (node.right) node = node.right;
        else {
          node = node.right = new Node(value);
          return node;
        }
      } else return node;
    } while (node);
  },

  search: function (value) {
    var node = this._root;
    if (!node) return null;

    do {
      if (value < node.value) node = node.left;
      else if (value > node.value) node = node.right;
      else return node;
    } while (node);
  }

};

// Aliases
BinarySearchTree.prototype.insert = BinarySearchTree.prototype.add;

if (exports) {
  exports.Node = Node;
  exports.BinarySearchTree = BinarySearchTree;
}
