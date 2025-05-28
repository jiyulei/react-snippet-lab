export default function classNames(...args) {
  const result = [];

  const callBackFn = (item) => {
    if (!item) return;

    if (typeof item === "string" || typeof item === "number") {
      result.push(item);
    } else if (Array.isArray(item)) {
      item.forEach(callBackFn);
    } else if (typeof item === "object") {
      for (const key in item) {
        if (item[key]) {
          result.push(key);
        }
      }
    }
  };

  args.forEach(callBackFn);

  return result.join(" ");
}
