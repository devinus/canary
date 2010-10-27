Canary - A passerine CommonJS binary search tree implementation
===============================================================

I wrote this library not for anything useful, but just as
a learning experience.

## Usage

    $ cd /path/to/canary
    $ node repl.js
    canary> var tree = new BinarySearchTree();
    canary> tree.addAll([9, 5, 2, 4, 6]);
    canary> var node2 = tree.find(2);
    canary> node2
    { left: null,
      right: { left: null, right: null, key: 4, parent: [Circular] },
      key: 2,
      parent: 
       { left: [Circular],
         right: { left: null, right: null, key: 6, parent: [Circular] },
         key: 5,
         parent: { left: [Circular], right: null, key: 9, parent: null } } }

