// primitive : number, string, null, undefined, BigInt, symbol, Boolean
// reference: array, function , object 
// Object: null, array, function, Set, Map, Date
// plain Object: const obj  = new Object({a: 1}); const obj = {}


export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

// 这里需要包括function ，因为函数也是Ojbect
export function isObject(value) {
  if (value == null) {
    return false;
  }

  if (typeof value === "function") {
    return true;
  }

  return typeof value === "object";
}

// 纯对象 就用原型来对比，
export function isPlainObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }
// 如果是纯对象这里prototype会返回Object.prototype的引用，所以可以直接用===判断
  const prototype = Object.getPrototypeOf(value);
  // 这里排除 const obj = Object.create(null)，这样创建没有原型
  return prototype === null || prototype === Object.prototype;
}
  