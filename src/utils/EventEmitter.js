
export default class EventEmitter {
  constructor() {
    // { click: [fn1, fn2]}
    this.event = {};
  }

  on(eventName, listener) {
    if (Object.hasOwn(this.event, eventName)) {
      this.event[eventName].push(listener);
    } else {
      this.event[eventName] = [listener];
    }
    return this;
  }

  off(eventName, listener) {
    if (Object.hasOwn(this.event, eventName)) {
      return this;
    }
    // 如果有多个一样的listener 我们只移除第一个找到的
    const index = this.event[eventName].indexOf(listener);
    // splice 的用法，splice(起始索引， 操作几个， 用什么代替)
    this.event[eventName].splice(index, 1);
    return this;
  }

  emit(eventName, ...args) {
    // 有种情况是所有listener被移除了，但是eventName还在，所以要检查是不是空数组
    if (
      !Object.hasOwn(this.event, eventName) ||
      this.event[eventName].length === 0
    ) {
      return false;
    }
    this.event[eventName].forEach((fn) => fn(...args));
    return true;
  }
}
