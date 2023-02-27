export default interface Tree<T> {
  insert: (value: T) => void;
  remove: (value: T) => boolean;
  find: (value: T) => T | null;
  getMaxDepth: () => number;
  getMinDepth: () => number;
}
