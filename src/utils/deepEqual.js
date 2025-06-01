// string, number, boolean, bigInt, symbol, null, undefined
// object, array
export default function DeepEqual(valueA, valueB) {
  // 粗略对比 类型不同直接返回。
  if (typeof valueA !== typeof valueB) {
    return false;
  }
  // 处理null， 因为null的type 也是object
  if ((valueA === null) & (valueB === null)) {
    return true;
  }
  // 这里处理的是 []， {}的情况。
  if (Array.isArray(valueA) !== Array.isArray(valueB)) {
    return false;
  }
  //都是数组判断
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    // 先检查长度要不然可能存在B包含a所有元素的情况
    if (valueA.length !== valueB.length) {
      return false;
    }

    for (let i = 0; i < valueA.length; i++) {
      if (!DeepEqual(valueA[i], valueB[i])) {
        return false;
      }
    }
    return true;
  }
  // 都是对象
  if (typeof valueB === "object" && typeof valueA === "object") {
    // 同理要先检查key的长度
    if (Object.keys(valueA).length !== Object.keys(valueB).length) {
      return false;
    }
    for (const key in valueA) {
      if (!DeepEqual(valueA[key], valueB[key])) {
        return false;
      }
    }
    return true;
  }
  // 原始类型直接对比
  return valueA === valueB;
}
