// array reduce 的常见用法
// 最大值
const arr = [1, 2, 3, 4, 5];

const max = arr.reduce((pre, cur) => (pre < cur ? cur : pre));
console.log("max", max);

//去重：
const arr2 = [1, 2, 3, 3, 4, 5, 5, 5, 6];
const result = arr2.reduce(
  (pre, cur) => (pre.includes(cur) ? pre : [...pre, cur]),
  []
);

console.log("去重", result);

//count character
const str = "hello";
const strArray = [...str];

const result2 = strArray.reduce((pre, cur) => {
  pre[cur] = pre[cur] ? pre[cur] + 1 : 1;
  return pre;
}, {});

console.log("string array", result2);

//id => item map

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const result3 = users.reduce((pre, cur) => {
  pre[cur.id] = cur;
  return pre;
}, {});

console.log("users map", result3);

// flatten
const nested = [[1, 2], [3, 4], [5]];

const result4 = nested.reduce((pre, cur) => pre.concat(cur));
console.log("flatten", result4);

// hasOwn可以用给array或者object ， 第一个参数为array或者object本身，第二个参数为index或者key

const MyReduce = function (callBackFn, initialValue) {
  const length = this.length;
  const noInitialValue = initialValue === undefined;
  let acc = noInitialValue ? this[0] : initialValue;

  let startIndex = noInitialValue ? 1 : 0;

  for (let i = startIndex; i < length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callBackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
