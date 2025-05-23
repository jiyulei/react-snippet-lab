export const debounceFn = (fn, duration) => {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn(...args);
    }, duration);
  };
};
