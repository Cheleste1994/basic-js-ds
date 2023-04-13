const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const node = {
      data: data,
      left: null,
      right: null
    };

    if (this.tree === null) {
      this.tree = node;
      return;
    }

    let current = this.tree;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  has(data) {
    let current = this.tree;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.tree;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    let current = this.tree;
    let parent = null;
    while (current !== null) {
      if (data < current.data) {
        parent = current;
        current = current.left;
      } else if (data > current.data) {
        parent = current;
        current = current.right;
      } else {
        if (current.left !== null && current.right !== null) {
          let minRight = current.right;
          while (minRight.left !== null) {
            minRight = minRight.left;
          }
          current.data = minRight.data;
          data = minRight.data;
          parent = current;
          current = current.right;
        } else if (current.left !== null) {
          if (parent === null) {
            this.tree = current.left;
          } else if (current === parent.left) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }
          return true;
        } else if (current.right !== null) {
          if (parent === null) {
            this.tree = current.right;
          } else if (current === parent.left) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }
          return true;
        } else {
          if (parent === null) {
            this.tree = null;
          } else if (current === parent.left) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          return true;
        }
      }
    }
    return false;
  }

  min() {
    if (this.tree === null) {
      return null;
    }

    let current = this.tree;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.tree === null) {
      return null;
    }

    let current = this.tree;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};



/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.findNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    } else if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const tempNode = this.getMinNode(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
  }

  getMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.getMinNode(node.left);
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let node = this.rootNode;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let node = this.rootNode;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
*/














/*
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = {
      data: data,
      left: null,
      right: null
    };

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  has(data) {
    let current = this._root;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    let current = this._root;
    let parent = null;
    while (current !== null) {
      if (data < current.data) {
        parent = current;
        current = current.left;
      } else if (data > current.data) {
        parent = current;
        current = current.right;
      } else {
        if (current.left !== null && current.right !== null) {
          let minRight = current.right;
          while (minRight.left !== null) {
            minRight = minRight.left;
          }
          current.data = minRight.data;
          data = minRight.data;
          parent = current;
          current = current.right;
        } else if (current.left !== null) {
          if (parent === null) {
            this._root = current.left;
          } else if (current === parent.left) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }
          return true;
        } else if (current.right !== null) {
          if (parent === null) {
            this._root = current.right;
          } else if (current === parent.left) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }
          return true;
        } else {
          if (parent === null) {
            this._root = null;
          } else if (current === parent.left) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          return true;
        }
      }
    }
    return false;
  }

  min() {
    if (this._root === null) {
      return null;
    }

    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}
*/