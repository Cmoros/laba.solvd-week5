import LinkedList from "../src/LinkedList";

describe("LinkedList", () => {
  describe("addLast", () => {
    test("should add items to the end of the list", () => {
      const list = new LinkedList<number>();
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      expect(list.getLast()).toBe(3);
      expect(list.getFirst()).toBe(1);
    });
  });

  describe("contains", () => {
    test("should return true if an item is in the list", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.contains(2)).toBe(true);
      expect(list.contains(1)).toBe(true);
      expect(list.contains(3)).toBe(true);
    });

    test("should return false if an item is not in the list", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.contains(4)).toBe(false);
      expect(list.contains(0)).toBe(false);
      expect(list.contains(-10)).toBe(false);
    });
  });

  describe("remove", () => {
    test("should remove an item from the list", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.remove(2)).toBe(true);
      expect(list.size()).toBe(2);
      expect(list.contains(2)).toBe(false);
    });

    test("should not remove anything if the list is empty", () => {
      const list = new LinkedList<number>();
      expect(list.remove(1)).toBe(false);
    });

    test("should not remove anything if the item is not in the list", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.remove(4)).toBe(false);
      expect(list.size()).toBe(3);
    });

    test("should remove items from the last", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.getLast()).toBe(3);
      expect(list.remove(3)).toBe(true);
      expect(list.size()).toBe(2);
      expect(list.getLast()).toBe(2);
      expect(list.remove(2)).toBe(true);
      expect(list.size()).toBe(1);
      expect(list.getLast()).toBe(1);
      expect(list.remove(1)).toBe(true);
      expect(list.size()).toBe(0);
    });
  });

  // describe("haveLoop", () => {
  //   test("should return true if the list has a loop", () => {
  //     const list = new LinkedList<LinkedList<Number>>();
  //     const node1 = new LinkedList(1);
  //     const node2 = new LinkedList(2);
  //     const node3 = new LinkedList(3);
  //     list.addLast(node1);
  //     list.addLast(node2);
  //     list.addLast(node3);
  //     list.addLast(node1);
  //     expect(node1.haveLoop()).toBe(true);
  //   });

  //   test("should return false if the list does not have a loop", () => {
  //     const list = new LinkedList<number>(1, 2, 3);
  //     expect(list.haveLoop()).toBe(false);
  //   });
  // });

  describe("size", () => {
    test("should return the size of the list", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.size()).toBe(3);
    });

    test("should return 0 for an empty list", () => {
      const list = new LinkedList<number>();
      expect(list.size()).toBe(0);
    });
  });

  describe("isEmpty", () => {
    test("should return true if the list is empty", () => {
      const list = new LinkedList<number>();
      expect(list.isEmpty()).toBe(true);
      expect(list.getFirst()).toBe(null);
      expect(list.getLast()).toBe(null);
    });

    test("should return false if the list is not empty", () => {
      const list = new LinkedList<number>(1, 2, 3);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe("addFirst", () => {
    test("should add items to the beginning of the list", () => {
      const list = new LinkedList<number>();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.getLast()).toBe(1);
      expect(list.getFirst()).toBe(3);
    });
  });
});
