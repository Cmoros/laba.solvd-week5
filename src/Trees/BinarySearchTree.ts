import { haveBothChildren, TreeNode } from "../Node";
import Tree from "./Tree";

export default class BinarySearchTree<T> implements Tree<T> {
  protected _root: TreeNode<T> | null = null;

  constructor(rootValue?: T) {
    if (rootValue != null) {
      this._root = new TreeNode(rootValue);
    }
  }

  protected _search(
    node: TreeNode<T> | null,
    value: T,
    adding = false
  ): TreeNode<T> | null {
    if (!node) return null;
    if (value > node.value) {
      if (!node.right && adding) {
        node.right = new TreeNode(value);
        return node.right;
      }
      return this._search(node.right, value, adding);
    }
    if (value < node.value) {
      if (!node.left && adding) {
        node.left = new TreeNode(value);
        return node.left;
      }
      return this._search(node.left, value, adding);
    }
    return node;
  }

  protected _remove(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null;
    if (node.value === value) return node;
    if (value > node.value) {
      const newNode = this._remove(node.right, value);
      if (newNode && newNode === node.right) {
        if (!haveBothChildren(newNode)) {
          node.right = newNode.right ?? newNode.left;
        } else {
          const nodeReplace = this._replace(newNode);
          node.right = nodeReplace;
        }
      }
      return newNode;
    }
    const newNode = this._remove(node.left, value);
    if (newNode && newNode === node.left) {
      if (!haveBothChildren(newNode)) {
        node.left = newNode.right ?? newNode.left;
      } else {
        const nodeReplace = this._replace(newNode);
        node.left = nodeReplace;
      }
    }
    return newNode;
  }

  protected _replace(node: TreeNode<T> & { left: TreeNode<T> }): TreeNode<T> {
    const nodeReplace = this._searchReplace(node.left);
    if (nodeReplace !== node.left) {
      nodeReplace.left = node.left;
    }
    nodeReplace.right = node.right;
    return nodeReplace;
  }

  protected _searchReplace(node: TreeNode<T>): TreeNode<T> {
    if (!node.right) return node;
    if (node.right.right) {
      const result = node.right;
      node.right = node.right.left;
      return result;
    }
    return this._searchReplace(node.right);
  }

  insert(value: T): void {
    if (!this._root) {
      this._root = new TreeNode(value);
      return;
    }
    this._search(this._root, value, true);
  }

  remove(value: T): boolean {
    if (!this._root) return false;
    const node = this._remove(this._root, value);
    if (!node) return false;
    if (node === this._root) {
      if (!haveBothChildren(node)) {
        this._root = node.right ?? node.left;
      } else {
        const nodeReplace = this._replace(node);
        this._root = nodeReplace;
      }
    }
    return true;
  }

  find(value: T): T | null {
    return this._search(this._root, value)?.value ?? null;
  }

  private _inOrder(
    node: TreeNode<T> | null,
    cb: (left: number, right: number) => number
  ): number {
    if (!node) return 0;
    const left = this._inOrder(node.left, cb);
    const right = this._inOrder(node.right, cb);
    return cb(left, right) + 1;
  }

  getMaxDepth(): number {
    return this._inOrder(this._root, Math.max);
  }

  getMinDepth(): number {
    return this._inOrder(this._root, Math.min);
  }
}
