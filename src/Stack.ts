import { LinkedNode } from "./Node";

export default class Stack<T> {
  private _top: LinkedNode<T> | null = null;
  constructor(firstValue?: T) {
    if (firstValue != null) {
      this._top = new LinkedNode(firstValue);
    }
  }

  peek(): T | null {
    if (this.isEmpty()) return null;
    return this._top!.value;
  }

  isEmpty(): boolean {
    return this._top === null;
  }

  push(value: T) {
    if (this.isEmpty()) {
      this._top = new LinkedNode(value);
      return;
    }
    const newTop = new LinkedNode(value, this._top);
    this._top = newTop;
  }

  pop(): T | null {
    if (this.isEmpty()) return null;
    const old = this._top;
    this._top = old!.next;
    return old!.value;
  }
}
