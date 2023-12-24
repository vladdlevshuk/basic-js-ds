const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    return this.rootItem;
  }

  add(data) {
    this.rootItem = this._addNode(this.rootItem, data);
  }

  has(data) {
    return this._hasNode(this.rootItem, data);
  }

  find(data) {
    return this._findNode(this.rootItem, data);
  }

  remove(data) {
    this.rootItem = this._removeNode(this.rootItem, data);
  }

  min() {
    const minValueNode = this._findMinNode(this.rootItem);
    return minValueNode ? minValueNode.data : null;
  }

  max() {
    const maxValueNode = this._findMaxNode(this.rootItem);
    return maxValueNode ? maxValueNode.data : null;
  }

  _addNode(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else {
      node.right = this._addNode(node.right, data);
    }

    return node;
  }

  _hasNode(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasNode(node.left, data);
    } else {
      return this._hasNode(node.right, data);
    }
  }

  _findNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }

  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minValue = this._findMinValue(node.right);
        node.data = minValue;
        node.right = this._removeNode(node.right, minValue);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else {
      node.right = this._removeNode(node.right, data);
    }

    return node;
  }

  _findMinValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  _findMaxNode(node) {
    while (node.right) {
      node = node.right;
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree
};