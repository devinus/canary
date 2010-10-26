var
  assert = require('assert'),
  canary = require('../lib/canary'),
  BinarySearchTree = canary.BinarySearchTree;

var
  tree = new BinarySearchTree(),
  node8 = tree.add(8),
  node3 = tree.add(3),
  node10 = tree.add(10),
  node1 = tree.add(1),
  node6 = tree.add(6),
  node14 = tree.add(14),
  node4 = tree.add(4),
  node7 = tree.add(7) ,
  node13 = tree.add(13); 

assert.strictEqual(tree.size(),     9,      "tree.size() !== 9");
assert.strictEqual(node8.value,     8,      "node8.value !== 8");
assert.strictEqual(node8.left,      node3,  "node8.left !== node3");
assert.strictEqual(node8.right,     node10, "node8.right !== node10");
assert.strictEqual(node3.parent,    node8,  "node3.parent !== node8");
assert.strictEqual(node3.left,      node1,  "node3.left !== node1");
assert.strictEqual(node3.right,     node6,  "node3.right !== node6");
assert.strictEqual(node10.parent,   node8,  "node10.parent !== node8");
assert.strictEqual(node10.left,     null,   "node10.left !== null");
assert.strictEqual(node10.right,    node14, "node10.right !== node14");
assert.strictEqual(node1.parent,    node3,  "node1.parent !== node3");
assert.strictEqual(node1.left,      null,   "node1.left !== null");
assert.strictEqual(node1.right,     null,   "node1.right !== null");
assert.strictEqual(node6.parent,    node3,  "node6.parent !== node3");
assert.strictEqual(node6.left,      node4,  "node6.left !== node4");
assert.strictEqual(node6.right,     node7,  "node6.right !== node7");
assert.strictEqual(node14.parent,   node10, "node14.parent !== node10");
assert.strictEqual(node14.left,     node13, "node14.left !== node13");
assert.strictEqual(node14.right,    null,   "node14.right !== null");
assert.strictEqual(node4.parent,    node6,  "node4.parent !== node6");
assert.strictEqual(node4.left,      null,   "node4.left !== null");
assert.strictEqual(node4.right,     null,   "node4.right !== null");
assert.strictEqual(node7.parent,    node6,  "node7.parent !== node6");
assert.strictEqual(node7.left,      null,   "node7.left !== null");
assert.strictEqual(node7.right,     null,   "node7.right !== null");
assert.strictEqual(node13.parent,   node14, "node13.parent !== node14");
assert.strictEqual(node13.left,     null,   "node13.left !== null");
assert.strictEqual(node13.right,    null,   "node13.right !== null");
assert.strictEqual(tree.add(8),     node8,  "tree.add(8) !== node8");
assert.strictEqual(tree.add(3),     node3,  "tree.add(3) !== node3");
assert.strictEqual(tree.add(10),    node10, "tree.add(10) !== node10");
assert.strictEqual(tree.add(1),     node1,  "tree.add(1) !== node1");
assert.strictEqual(tree.add(6),     node6,  "tree.add(6) !== node6");
assert.strictEqual(tree.add(14),    node14, "tree.add(14) !== node14");
assert.strictEqual(tree.add(4),     node4,  "tree.add(4) !== node4");
assert.strictEqual(tree.add(7),     node7,  "tree.add(7) !== node7");
assert.strictEqual(tree.add(13),    node13, "tree.add(13) !== node13");
assert.strictEqual(tree.search(8),  node8,  "tree.search(8) !== node8");
assert.strictEqual(tree.delete(14), 8,      "tree.delete(14) !== 8");
assert.strictEqual(node10.left,     null,   "node10.left !== null");
assert.strictEqual(node10.right,    node13, "node10.right !== node13");
assert.strictEqual(node13.parent,   node10, "node13.parent !== node10");
assert.strictEqual(node13.left,     null,   "node13.left !== null");
assert.strictEqual(node13.right,    null,   "node13.right !== null");
assert.strictEqual(tree.delete(10), 7,      "tree.delete(10)) !== 7");
assert.strictEqual(node8.left,      node3,  "node8.left !== node3");
assert.strictEqual(node8.right,     node13, "node8.right !== node13");
assert.strictEqual(node13.parent,   node8,  "node13 !== node10");
assert.strictEqual(node13.left,     null,   "node13 !== null");
assert.strictEqual(tree.delete(3),  6,      "tree.delete(3) !== 6");
assert.strictEqual(node4.parent,    node8,  "node4.parent !== node8");
assert.strictEqual(node4.left,      node1,  "node8.left !== node3");
assert.strictEqual(node4.right,     node6,  "node4.right !== node6");
assert.strictEqual(tree.delete(8),  0,      "tree.delete(8) !== 0");

//
//      8
//     / \
//    3   10
//   /\     \
//  1  6    14
//    / \   /
//   4   7 13
//
