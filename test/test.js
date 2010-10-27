var
  assert = require('assert'),
  canary = require('../lib/canary'),
  BinarySearchTree = canary.BinarySearchTree;

//
//      8
//     / \
//    3   10
//   /\     \
//  1  6    14
//    / \   /
//   4   7 13
//
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

assert.strictEqual(tree.size(),       9,      "tree.size() !== 9");
assert.strictEqual(tree.length,       9,      "tree.length !== 9");
assert.strictEqual(tree.findMin(),    node1,  "tree2.findMin() !== node1");
assert.strictEqual(tree.findMax(),    node14, "tree2.findMax() !== node14");
assert.strictEqual(tree.contains(6),  true,   "tree.contains(6) !== true");
assert.strictEqual(tree.contains(12), false,  "tree.contains(12) !== false");
assert.strictEqual(node8.key,         8,      "node8.value !== 8");
assert.strictEqual(node8.left,        node3,  "node8.left !== node3");
assert.strictEqual(node8.right,       node10, "node8.right !== node10");
assert.strictEqual(node3.parent,      node8,  "node3.parent !== node8");
assert.strictEqual(node3.left,        node1,  "node3.left !== node1");
assert.strictEqual(node3.right,       node6,  "node3.right !== node6");
assert.strictEqual(node10.parent,     node8,  "node10.parent !== node8");
assert.strictEqual(node10.left,       null,   "node10.left !== null");
assert.strictEqual(node10.right,      node14, "node10.right !== node14");
assert.strictEqual(node1.parent,      node3,  "node1.parent !== node3");
assert.strictEqual(node1.left,        null,   "node1.left !== null");
assert.strictEqual(node1.right,       null,   "node1.right !== null");
assert.strictEqual(node6.parent,      node3,  "node6.parent !== node3");
assert.strictEqual(node6.left,        node4,  "node6.left !== node4");
assert.strictEqual(node6.right,       node7,  "node6.right !== node7");
assert.strictEqual(node14.parent,     node10, "node14.parent !== node10");
assert.strictEqual(node14.left,       node13, "node14.left !== node13");
assert.strictEqual(node14.right,      null,   "node14.right !== null");
assert.strictEqual(node4.parent,      node6,  "node4.parent !== node6");
assert.strictEqual(node4.left,        null,   "node4.left !== null");
assert.strictEqual(node4.right,       null,   "node4.right !== null");
assert.strictEqual(node7.parent,      node6,  "node7.parent !== node6");
assert.strictEqual(node7.left,        null,   "node7.left !== null");
assert.strictEqual(node7.right,       null,   "node7.right !== null");
assert.strictEqual(node13.parent,     node14, "node13.parent !== node14");
assert.strictEqual(node13.left,       null,   "node13.left !== null");
assert.strictEqual(node13.right,      null,   "node13.right !== null");
assert.strictEqual(tree.add(8),       node8,  "tree.add(8) !== node8");
assert.strictEqual(tree.add(3),       node3,  "tree.add(3) !== node3");
assert.strictEqual(tree.add(10),      node10, "tree.add(10) !== node10");
assert.strictEqual(tree.add(1),       node1,  "tree.add(1) !== node1");
assert.strictEqual(tree.add(6),       node6,  "tree.add(6) !== node6");
assert.strictEqual(tree.add(14),      node14, "tree.add(14) !== node14");
assert.strictEqual(tree.add(4),       node4,  "tree.add(4) !== node4");
assert.strictEqual(tree.add(7),       node7,  "tree.add(7) !== node7");
assert.strictEqual(tree.add(13),      node13, "tree.add(13) !== node13");
assert.strictEqual(tree.find(8),      node8,  "tree.find(8) !== node8");
assert.strictEqual(tree.remove(14),   8,      "tree.remove(14) !== 8");
assert.strictEqual(node10.left,       null,   "node10.left !== null");
assert.strictEqual(node10.right,      node13, "node10.right !== node13");
assert.strictEqual(node13.parent,     node10, "node13.parent !== node10");
assert.strictEqual(node13.left,       null,   "node13.left !== null");
assert.strictEqual(node13.right,      null,   "node13.right !== null");
assert.strictEqual(tree.remove(10),   7,      "tree.remove(10)) !== 7");
assert.strictEqual(node8.left,        node3,  "node8.left !== node3");
assert.strictEqual(node8.right,       node13, "node8.right !== node13");
assert.strictEqual(node13.parent,     node8,  "node13 !== node10");
assert.strictEqual(node13.left,       null,   "node13 !== null");
assert.strictEqual(tree.remove(3),    6,      "tree.remove(3) !== 6");
assert.strictEqual(node4.parent,      node8,  "node4.parent !== node8");
assert.strictEqual(node4.left,        node1,  "node8.left !== node3");
assert.strictEqual(node4.right,       node6,  "node4.right !== node6");
assert.strictEqual(tree.remove(8),    0,      "tree.remove(8) !== 0");
assert.strictEqual(tree.isEmpty(),    true,   "tree.isEmpty() !== true");

//        9
//       /
//      5
//     / \
//    2   6
//   /
//  1
var
  tree2 = new BinarySearchTree(9, 5, 2, 1, 6),
  node9 = tree2.find(9),
  node5 = tree2.find(5),
  node2 = tree2.find(2);

node6 = tree2.find(6);
node1 = tree2.find(1);

assert.strictEqual(tree2.size(),    5,     "tree.size() !== 5");
assert.strictEqual(tree2.findMin(), node1, "tree2.findMin() !== node1");
assert.strictEqual(tree2.findMax(), node9, "tree2.findMax() !== node9");
assert.strictEqual(node9.parent,    null,  "node9.parent !== null");
assert.strictEqual(node9.left,      node5, "node9.left !== node5");
assert.strictEqual(node9.right,     null,  "node9.right !== null");
assert.strictEqual(node5.parent,    node9, "node5.parent !== node9");
assert.strictEqual(node5.left,      node2, "node5.left !== node2");
assert.strictEqual(node5.right,     node6, "node5.right !== node6");
assert.strictEqual(node2.parent,    node5, "node2.parent !== node5");
assert.strictEqual(node2.left,      node1, "node2.left !== node1");
assert.strictEqual(node2.right,     null,  "node2.right !== null");
assert.strictEqual(node6.parent,    node5, "node6.parent !== node5");
assert.strictEqual(node6.left,      null,  "node6.left !== null");
assert.strictEqual(node6.right,     null,  "node6.right !== null");
assert.strictEqual(node1.parent,    node2, "node1.parent !== node2");
assert.strictEqual(node1.left,      null,  "node1.left !== null");
assert.strictEqual(node1.right,     null,  "node1.right !== null");

//        9
//       / \
//      5   10
//     / \    \
//    2   6   14
//   /       /
//  1      11
tree2.addAll([10, 14, 11]);

var node11 = tree2.find(11);

node10 = tree2.find(10);
node14 = tree2.find(14);

assert.strictEqual(tree2.size(),    8,      "tree2.size() !== 8");
assert.strictEqual(tree2.findMin(), node1,  "tree2.findMin() !== node1");
assert.strictEqual(tree2.findMax(), node14, "tree2.findMax() !== node14");
assert.strictEqual(node10.parent,   node9,  "node10.parent !== node9");
assert.strictEqual(node10.left,     null,   "node10.left !== null");
assert.strictEqual(node10.right,    node14, "node10.right !== node14");
assert.strictEqual(node14.parent,   node10, "node14.parent !== node10");
assert.strictEqual(node14.left,     node11, "node14.left !== node11");
assert.strictEqual(node14.right,    null,   "node14.right !== null");
assert.strictEqual(node11.parent,   node14, "node11.parent !== node14");
assert.strictEqual(node11.left,     null,   "node11.left !== null");
assert.strictEqual(node11.right,    null,   "node11.right !== null");