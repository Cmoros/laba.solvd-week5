import { LinkedNode } from "./Node";

export default class LinkedList<T> {
  // _last means last one added (like a queue)
  // It can be renamed to _head if think in like a stack
  // It would have to interchange getFirst/addFirst <-> getLast/addLast
  private _last: LinkedNode<T> | null = null;

  constructor(...values: T[]) {
    for (const value of values) {
      this.addLast(value);
    }
  }

  isEmpty(): boolean {
    return this._last == null;
  }

  addLast(value: T): void {
    const newLast = new LinkedNode(value, this._last);
    this._last = newLast;
  }

  contains(value: T): boolean {
    let current = this._last;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  haveLoop(): boolean {
    let slowPointer = this._last;
    let fastPointer = this._last;

    while (
      slowPointer != null &&
      fastPointer != null &&
      fastPointer.next != null
    ) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer == fastPointer) return true;
    }

    return false;
  }

  remove(value: T): boolean {
    if (this.isEmpty()) return false;
    if (this._last!.value === value) {
      this._last = this._last!.next;
      return true;
    }

    let current = this._last as LinkedNode<T>;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return true;
      }
      current = current.next!;
    }
    return false;
  }

  size(): number {
    let count = 0;
    let current = this._last;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getLast(): T | null {
    if (this.isEmpty()) return null;
    return this._last!.value;
  }

  getFirst(): T | null {
    if (this.isEmpty()) return null;
    let current = this._last as LinkedNode<T>;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  addFirst(value: T): void {
    if (this.isEmpty()) {
      this.addLast(value);
      return;
    }
    let current = this._last as LinkedNode<T>;
    while (current.next) {
      current = current.next;
    }
    current.next = new LinkedNode(value);
  }
}
