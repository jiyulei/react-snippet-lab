export default function flatten(value) {
  const result = [];

  value.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flatten([1, [2, [3, 4]], 5, [6, 7]]));
