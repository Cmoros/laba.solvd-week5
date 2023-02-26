import { LinkedNode } from "./Node";

export default class LinkedList<T> {
  // _last means last one added (like a queue)
  // It can be renamed to _head if think in like a stack
  // It would have to interchange getFirst/addFirst <-> getLast/addLast
  private _last: LinkedNode<T> | null = null;

  // The list could also have a link to the first, so getFirst() would be O(1)
  // (addFirst() would still be O(n) since we don't have reference to previous
  // to keep the link, that would require doubly linked list)
  // Also could have a private length property with the size so it could be O(1) as well
  // And update it everytime something is added or removed

  constructor(...values: T[]) {
    for (const value of values) {
      this.addLast(value);
    }
  }

  // O(1)
  isEmpty(): boolean {
    return this._last == null;
  }

  // O(1)
  addLast(value: T): void {
    const newLast = new LinkedNode(value, this._last);
    this._last = newLast;
  }

  // O(n)
  contains(value: T): boolean {
    let current = this._last;

    while (current) {
      // n * O(1)
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // O(n)
  haveLoop(): boolean {
    let slowPointer = this._last;
    let fastPointer = this._last;

    while (
      slowPointer != null &&
      fastPointer != null &&
      fastPointer.next != null
    ) {
      // n * O(1)
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer == fastPointer) return true;
    }

    return false;
  }

  // O(n)
  remove(value: T): boolean {
    if (this.isEmpty()) return false;
    if (this._last!.value === value) {
      this._last = this._last!.next;
      return true;
    }

    let current = this._last as LinkedNode<T>;
    while (current.next) {
      // n * O(1)
      if (current.next.value === value) {
        current.next = current.next.next;
        return true;
      }
      current = current.next!;
    }
    return false;
  }

  // O(n)
  size(): number {
    let count = 0;
    let current = this._last;
    while (current) {
      // n * O(1)
      count++;
      current = current.next;
    }
    return count;
  }

  // O(1)
  getLast(): T | null {
    if (this.isEmpty()) return null;
    return this._last!.value;
  }

  // O(n)
  getFirst(): T | null {
    if (this.isEmpty()) return null;
    let current = this._last as LinkedNode<T>;
    while (current.next) {
      // n * O(1)
      current = current.next;
    }
    return current.value;
  }

  // O(n)
  addFirst(value: T): void {
    if (this.isEmpty()) {
      this.addLast(value);
      return;
    }
    let current = this._last as LinkedNode<T>;
    while (current.next) {
      // n * O(1)
      current = current.next;
    }
    current.next = new LinkedNode(value);
  }
}
