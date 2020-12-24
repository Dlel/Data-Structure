export function defaultToString(key) {
  if (key == null) {
    return "NULL";
  } else if (key == undefined) {
    return "UNDEFINED";
  } else if (key instanceof String || typeof key == "string") {
    return `${key}`;
  }
  return key.toString();
}
export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key} : ${this.value}]`;
  }
}

class Node {
  //链表的辅助类
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      //while执行完就是最后一项了
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    const node = new Node(element);
    //越界
    if (position > -1 && position < this.length) {
      if (position == 0) {
        let current = this.head;
        this.head = node;
        node.next = current;
        this.length++;
      } else {
        let index = 0;
        let current = this.head;
        let previous = null;
        while (index < position) {
          previous = current; //保存插入位置的上一个节点
          current = current.next; //插入位置的下一个节点
          index++;
        }
        previous.next = node; //上一个节点链接到新节点
        node.next = current; //新节点链接到后面的节点
        this.length++;
      }
    }
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      if (position == 0) {
        let current = this.head;
        this.head = current.next;
        this.length--;
      } else {
        let index = 0;
        let previous = null;
        let current = this.head;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        this.length--;
        return current;
      }
    }
  }
  indexOf(element) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  getElementAt(position) {
    let current = this.removeAt(position);
    this.insert(position, current.element);
    return current.element;
  }
  remove(element) {
    let position = this.indexOf(element);
    this.removeAt(position);
  }
  toString() {
    let charString = "";
    let current = this.head;
    while (current) {
      charString = charString + current.element;
      current = current.next;
    }
    return charString;
  }
  size() {
    if (this.length === 0) {
      return false;
    }
    return true;
  }
  isEmpty() {
    let sys = !this.size();
    return sys;
  }
}
