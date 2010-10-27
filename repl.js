var
  repl = require('repl'),
  canary = require('./lib/canary');

repl.start("canary> ").context = {
  BinarySearchTree: canary.BinarySearchTree,
  Node: canary.Node
};
