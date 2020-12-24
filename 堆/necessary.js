export function defaultCompare(key1, key2) {
  if (key1 < key2) {
    return true
  } else if (key1 > key2) {
    return false
  } else {
    return null
  }
}
export class Node {
  constructor(key) {
    this.key = key; //节点值
    this.left = null;
    this.right = null;
  }
}