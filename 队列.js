export class Queue {
  constructor() {
    this.count = 0,
      this.item = {},
      this.lowestCount = 0
  }
  enqueue(element) {
    this.item[this.count] = element;
    this.count++;
  }
  isEmpty() {
    //return this.size() === 0;
    if (this.count - this.lowestCount === 0) {
      return true;
    }
    return false;
  }
  size() {
    return this.count - this.lowestCount;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.item[this.lowestCount]; //得到要删除的值
      delete this.item[this.lowestCount];
      this.lowestCount++;
      return result // 返回它
    }
  }
  peek() {
    if (this.isEmpty()) {
      return ''
    } else {
      return this.item[this.lowestCount]
    }
  }
  clear() {
    this.item = {},
      this.count = 0,
      this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    } else {
      let objString = ''
      for (let i = this.lowestCount; i < this.count; i++) {
        // objString = objString + this.item[i]
        objString = `${objString}${this.item[i]}`
      }
      return objString
    }
  }
}