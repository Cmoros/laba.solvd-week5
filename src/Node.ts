export default class Node<T> {
  constructor(public value: T) {}
}

export class LinkedNode<T> extends Node<T> {
  constructor(value: T, public next: LinkedNode<T> | null = null) {
    super(value);
    this.next = next;
  }
}
