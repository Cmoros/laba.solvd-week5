import Stack from "./Stack";

export default class Queue<T> {
  private _stack1 = new Stack<T>();
  private _stack2 = new Stack<T>();
  private _lastStack1: T | null = null;

  constructor(firstValue?: T) {
    if (firstValue) {
      this._stack2.push(firstValue);
    }
  }

  // O(n)
  dequeue(): T | null {
    if (this._stack2.isEmpty()) {
      while (!this._stack1.isEmpty()) {
        this._stack2.push(this._stack1.pop() as T); // n O(1)
      }
      this._lastStack1 = null;
    }
    const result = this._stack2.pop(); // O(1)
    return result;
  }

  // O(1)
  enqueue(value: T) {
    if (this._stack1.isEmpty()) {
      this._lastStack1 = value;
    }
    this._stack1.push(value); // O(1)
  }

  // O(1)
  peek(): T | null {
    return this._stack2.peek() ?? this._lastStack1;
  }

  // O(1)
  isEmpty(): boolean {
    return this._stack2.isEmpty() && this._stack1.isEmpty(); // O(1)
  }
}
