import BinarySearchTree from "./BinarySearchTree";
import { ColorTreeNode } from "./Node";

// Not finished
export class RedBlackTree<T> extends BinarySearchTree<T> {
  protected _root: ColorTreeNode<T> | null = null;
  constructor(rootValue?: T) {
    super(rootValue);
    if (this._root) {
      this._root.color = "black";
      this._root.parent = null;
    }
  }
}
