// Copyright (c) 2010, Devin Torres <devin@devintorres.com>

var BinarySearchTree = function () {
  this._root = null;
  this._size = 0;

  if (this.__defineGetter__) {
    this.__defineGetter__('length', function () {
      return this._size;
    });
  }

  if (arguments.length > 1) {
    return this.addAll(arguments);
  }
};

var Node = function (key, parent) {
  this.left = null;
  this.right = null;
  this.key = key || null;
  this.parent = parent || null;
};

BinarySearchTree.prototype = {

  add: function (key) {
    var node = this._root;
    if (!node) {
      this._root = node = new Node(key);
      this._size++;
      return node;
    }

    do {
      if (key < node.key) {
        if (node.left) node = node.left;
        else {
          node = node.left = new Node(key, node);
          this._size++;
          return node;
        }
      } else if (key > node.key) {
        if (node.right) node = node.right;
        else {
          node = node.right = new Node(key, node);
          this._size++;
          return node;
        }
      } else return node;
    } while (node);
  },

  addAll: function (arr) {
    var len = arr.length;
    for (var idx = 0; idx < len; idx++) this.add(arr[idx]);
    return this;
  },

  find: function (key) {
    var node = this._root;
    if (!node) return null;

    do {
      if (key < node.key) node = node.left;
      else if (key > node.key) node = node.right;
      else return node;
    } while (node);

    return null;
  },

  findMin: function () {
    var node = this._root;
    if (!node) return null;

    while (node.left) node = node.left;
    return node;
  },

  findMax: function () {
    var node = this._root;
    if (!node) return null;

    while (node.right) node = node.right;
    return node;
  },

  remove: function (key) {
    var node = this._root;
    if (!node) return null;
  
    do {
      if (key < node.key) node = node.left;
      else if (key > node.key) node = node.right;
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
            else parent.right = left;
            left.parent = parent;
          } else {
            if (node === parent.left) parent.left = right;
            else parent.right = right;
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

    return null;
  },

  contains: function (key) {
    return !!this.find(key);
  },

  clear: function () {
    this._root = null;
    this._size = 0;
  },

  isEmpty: function () {
    return this._size < 1;
  },

  size: function () {
    return this._size;
  }

};

// Aliases
BinarySearchTree.prototype.insert = BinarySearchTree.prototype.add;
BinarySearchTree.prototype.insertAll = BinarySearchTree.prototype.addAll;
BinarySearchTree.prototype.search = BinarySearchTree.prototype.find;
BinarySearchTree.prototype.count = BinarySearchTree.prototype.size;
BinarySearchTree.prototype.fromArray = BinarySearchTree.prototype.addAll;
BinarySearchTree.prototype['delete'] = BinarySearchTree.prototype.remove;

if (exports) {
  exports.Node = Node;
  exports.BinarySearchTree = BinarySearchTree;
}
