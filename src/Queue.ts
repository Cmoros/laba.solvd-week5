import Stack from "./Stack";

export default class Queue<T> {
  private _stack1 = new Stack<T>();
  private _stack2 = new Stack<T>();
  private _first: T | null = null;

  constructor(firstValue?: T) {
    if (firstValue) {
      this._stack1.push(firstValue);
      this._first = firstValue;
    }
  }

  dequeue(): T | null {
    if (this._stack1.isEmpty()) return null;
    while (!this._stack1.isEmpty()) {
      this._stack2.push(this._stack1.pop() as T);
    }
    const result = this._stack2.pop();
    this._first = this._stack2.peek();
    while (!this._stack2.isEmpty()) {
      this._stack1.push(this._stack2.pop() as T);
    }
    return result;
  }

  enqueue(value: T) {
    if (this.isEmpty()) {
      this._first = value;
    }
    this._stack1.push(value);
  }

  peek(): T | null {
    return this._first;
  }

  isEmpty(): boolean {
    return this._stack1.isEmpty();
  }
}
