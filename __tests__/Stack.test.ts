import Stack from "../src/Stack";

describe("Stack", () => {
  it("should push and pop 1 item", () => {
    const stack1 = new Stack<number>();

    expect(stack1.isEmpty()).toBe(true);
    expect(stack1.peek()).toBe(null);

    stack1.push(5);

    expect(stack1.peek()).toBe(5);
    expect(stack1.isEmpty()).toBe(false);
    expect(stack1.pop()).toBe(5);
    expect(stack1.isEmpty()).toBe(true);
    expect(stack1.peek()).toBe(null);

    const obj = {};

    const stack2 = new Stack<object>();
    expect(stack2.peek()).toBe(null);
    stack2.push(obj);
    expect(stack2.isEmpty()).toBe(false);
    expect(stack2.peek()).toBe(obj);
    expect(stack2.pop()).toBe(obj);
    expect(stack2.isEmpty()).toBe(true);
    expect(stack2.peek()).toBe(null);
  });

  it("should be initialized with constructor", () => {
    const stack = new Stack("hola");
    expect(stack.peek()).toBe("hola");
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBe("hola");
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return null when empty", () => {
    const stack = new Stack<number>();
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
    expect(stack.isEmpty()).toBe(true);
  });

  it("should push and pop many items", () => {
    const stack1 = new Stack<number>();

    stack1.push(8);
    stack1.push(5);
    stack1.push(3);
    expect(stack1.peek()).toBe(3);
    expect(stack1.pop()).toBe(3);
    expect(stack1.peek()).toBe(5);
    stack1.push(10);
    expect(stack1.peek()).toBe(10);
    expect(stack1.pop()).toBe(10);
    expect(stack1.pop()).toBe(5);
    expect(stack1.pop()).toBe(8);
    expect(stack1.isEmpty()).toBe(true);
  });
});
