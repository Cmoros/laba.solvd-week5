export default class Node<T> {
  constructor(public value: T) {}
}

export class LinkedNode<T> extends Node<T> {
  constructor(value: T, public next: LinkedNode<T> | null = null) {
    super(value);
    this.next = next;
  }
}

export class TreeNode<T> extends Node<T> {
  public left: typeof this | null = null;
  public right: typeof this | null = null;

  constructor(value: T) {
    super(value);
  }
}

type NodeColor = "red" | "black";
export class ColorTreeNode<T> extends TreeNode<T> {
  public left: typeof this | null = null;
  public right: typeof this | null = null;
  public parent: typeof this | null = null;

  constructor(value: T, public color: NodeColor = "red") {
    super(value);
  }
}

export const haveBothChildren = <T extends TreeNode<any>>(
  node: T
): node is T & { right: T; left: T } => {
  return !!(node.right && node.left);
};
