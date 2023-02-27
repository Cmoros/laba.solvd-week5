import BinarySearchTree from "../src/Trees/BinarySearchTree";

describe("BinarySearchTree", () => {
  describe("insert", () => {
    it("should one value into the tree", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(4);
      expect(tree.find(4)).toBe(4);
    });

    it("should add many values", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(5);
      tree.insert(4);
      tree.insert(6);
      expect(tree.find(4)).toBe(4);
      expect(tree.find(5)).toBe(5);
      expect(tree.find(6)).toBe(6);
    });
  });

  describe("remove", () => {
    it("should remove 1 value", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(4);

      expect(tree.remove(4)).toBe(true);
      expect(tree.find(4)).toBe(null);
    });

    it("should remove many values", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(6);
      tree.insert(4);
      tree.insert(5);
      tree.insert(8);
      expect(tree.remove(4)).toBe(true);
      expect(tree.find(4)).toBe(null);
      expect(tree.remove(6)).toBe(true);
      expect(tree.find(6)).toBe(null);
      expect(tree.remove(5)).toBe(true);
      expect(tree.find(5)).toBe(null);
    });

    it("should remove the root first", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(5);
      tree.insert(4);
      tree.insert(6);
      tree.insert(7);
      tree.insert(3);
      expect(tree.remove(5)).toBe(true);
      expect(tree.find(5)).toBe(null);
      expect(tree.remove(4)).toBe(true);
      expect(tree.find(4)).toBe(null);
      expect(tree.remove(6)).toBe(true);
      expect(tree.find(6)).toBe(null);
      expect(tree.remove(3)).toBe(true);
      expect(tree.find(3)).toBe(null);
      expect(tree.remove(7)).toBe(true);
      expect(tree.find(7)).toBe(null);
    });

    it("should not remove a inexistent value", () => {
      const tree = new BinarySearchTree<number>();
      expect(tree.remove(4)).toBe(false);
      tree.insert(4);
      expect(tree.remove(5)).toBe(false);
    });

    it("should remove node with 2 children not root", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(2);
      tree.insert(6);
      tree.insert(8);
      tree.insert(5);
      tree.insert(4);
      tree.insert(3);

      expect(tree.remove(6)).toBe(true);
      expect(tree.remove(5)).toBe(true);
      expect(tree.remove(3)).toBe(true);
      expect(tree.remove(8)).toBe(true);
    });

    it("should remove node with 2 children not root part 2", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(8);
      tree.insert(5);
      tree.insert(6);
      tree.insert(7);
      tree.insert(4);
      tree.insert(2);
      tree.insert(3);

      expect(tree.remove(5)).toBe(true);
      expect(tree.remove(4)).toBe(true);
      expect(tree.remove(6)).toBe(true);
      expect(tree.remove(3)).toBe(true);
    });
  });

  describe("getMaxDepth-getMinDepth", () => {
    it("should be correct with empty tree", () => {
      const tree = new BinarySearchTree<number>();

      expect(tree.getMaxDepth()).toBe(0);
      expect(tree.getMinDepth()).toBe(0);
    });

    it("should be correct with 1 node", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(5);

      expect(tree.getMaxDepth()).toBe(1);
      expect(tree.getMinDepth()).toBe(1);
    });

    it("should be correct with larger tree", () => {
      const tree = new BinarySearchTree<number>();
      tree.insert(4);

      tree.insert(2);
      expect(tree.getMaxDepth()).toBe(2);
      expect(tree.getMinDepth()).toBe(1);

      tree.insert(6);
      expect(tree.getMaxDepth()).toBe(2);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(8);
      expect(tree.getMaxDepth()).toBe(3);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(10);
      expect(tree.getMaxDepth()).toBe(4);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(7);
      expect(tree.getMaxDepth()).toBe(4);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(5);
      expect(tree.getMaxDepth()).toBe(4);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(0);
      expect(tree.getMaxDepth()).toBe(4);
      expect(tree.getMinDepth()).toBe(2);

      tree.insert(3);
      expect(tree.getMaxDepth()).toBe(4);
      expect(tree.getMinDepth()).toBe(3);
    });
  });

  describe("constructor", () => {
    const tree = new BinarySearchTree(40);
    expect(tree.find(40)).toBe(40);
    expect(tree.remove(40)).toBe(true);
  });
});
