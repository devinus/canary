// Copyright (c) 2010, Devin Torres <devin@devintorres.com>

var BinarySearchTree = function () {
  this._root = null;
  this._size = 0;
};

var Node = function (value, parent) {
  this.left = null;
  this.right = null;
  this.value = value || null;
  this.parent = parent || null;
};

BinarySearchTree.prototype = {

  add: function (value) {
    var node = this._root;
    if (!node) {
      this._root = node = new Node(value);
      this._size++;
      return node;
    }

    do {
      if (value < node.value) {
        if (node.left) node = node.left;
        else {
          node = node.left = new Node(value, node);
          this._size++;
          return node;
        }
      } else if (value > node.value) {
        if (node.right) node = node.right;
        else {
          node = node.right = new Node(value, node);
          this._size++;
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
  },

  delete: function (value) {
    var node = this._root;
    if (!node) return null;
  
    do {
      if (value < node.value) node = node.left;
      else if (value > node.value) node = node.right;
      else {
        var parent = node.parent;
        if (!parent) {
          this._root = null;
          this._size = 0;
          return 0;
        }

        var left = node.left,
            right = node.right;
        if (left && right) {
          var successor = right;
          while (successor.left) successor = successor.left;
          successor.parent.left = null;
          successor.parent = parent;
          successor.left = left;
          successor.right = right;
        } else if (left || right) {  
          if (left) {
            if (node === parent.left) parent.left = left;
            else if (node === parent.right) parent.right = left;
            left.parent = parent;
          } else {
            if (node === parent.left) parent.left = right;
            else if (node === parent.right) parent.right = right;
            right.parent = parent;
          }
        } else {
          if (node === parent.left) parent.left = null;
          else if (node === parent.right) parent.right = null;
        }
        node = null;
        return --this._size;
      }
    } while (node);
  },

  size: function () {
    return this._size;
  }

};

// Aliases
BinarySearchTree.prototype.insert = BinarySearchTree.prototype.add;

if (exports) {
  exports.Node = Node;
  exports.BinarySearchTree = BinarySearchTree;
}
