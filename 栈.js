export class Stack {
  constructor() {
      this.item = {}
      this.count = 0
  }
  push(element) {
    this.item[this.count] = element;
    this.count++
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    else {
      this.count--;
      const result = this.item[this.count]//得到要删除的值
      delete this.item[this.count]
      return result  //返回它
    } 
  }
  peek() {
    if(this.isEmpty()) {
        return ''
    } 
    else {
        return this.item[this.ccount -1]
    }
}
clear() {
  this.item ={},
  this.count = 0
}
toString() {
  if (this.isEmpty()) {
    return ''
  }
  else {
    // let objString = `${this.items[0]}`
    // for (let i = 1; i < this.count; i++) {
    // 	objString = `${objString}${this.items[i]}`
    // }
    
    // let objString = ''
    // for (let i = 0; i < this.count; i++) {
    //	objString = `${objString}${this.items[i]}`
    // }
    
    let objString = ''
    for (let i = 0; i < this.count; i++) {
      objString = objString} + '' + this.item[i]
    }
    return objString
  }

}