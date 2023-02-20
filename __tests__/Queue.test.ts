import Queue from "../src/Queue";

describe("Queue", () => {
  it("should enqueue and dequeue 1 item", () => {
    const queue1 = new Queue<number>();

    expect(queue1.isEmpty()).toBe(true);
    expect(queue1.peek()).toBe(null);

    queue1.enqueue(5);

    expect(queue1.peek()).toBe(5);
    expect(queue1.isEmpty()).toBe(false);
    expect(queue1.dequeue()).toBe(5);
    expect(queue1.isEmpty()).toBe(true);
    expect(queue1.peek()).toBe(null);

    const obj = {};

    const queue2 = new Queue<object>();
    expect(queue2.peek()).toBe(null);
    queue2.enqueue(obj);
    expect(queue2.isEmpty()).toBe(false);
    expect(queue2.peek()).toBe(obj);
    expect(queue2.dequeue()).toBe(obj);
    expect(queue2.isEmpty()).toBe(true);
    expect(queue2.peek()).toBe(null);
  });

  it("should be initialized with constructor", () => {
    const queue = new Queue("hola");
    expect(queue.peek()).toBe("hola");
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe("hola");
    expect(queue.isEmpty()).toBe(true);
  });

  it("should return null when empty", () => {
    const queue = new Queue<number>();
    expect(queue.dequeue()).toBe(null);
    expect(queue.peek()).toBe(null);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(null);
    expect(queue.peek()).toBe(null);
    expect(queue.dequeue()).toBe(null);
    expect(queue.peek()).toBe(null);
    expect(queue.isEmpty()).toBe(true);
  });

  it("should enqueue and dequeue many items", () => {
    const queue1 = new Queue<number>();

    queue1.enqueue(8);
    queue1.enqueue(5);
    queue1.enqueue(3);
    expect(queue1.peek()).toBe(8);
    expect(queue1.dequeue()).toBe(8);
    expect(queue1.peek()).toBe(5);
    queue1.enqueue(10);
    expect(queue1.peek()).toBe(5);
    expect(queue1.dequeue()).toBe(5);
    expect(queue1.dequeue()).toBe(3);
    expect(queue1.dequeue()).toBe(10);
    expect(queue1.isEmpty()).toBe(true);
  });
});
