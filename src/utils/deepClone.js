export default function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

// export default function deepClone(value) {
//   if (
//     typeof value === "string" ||
//     typeof value === "number" ||
//     value == null ||
//     typeof value === "boolean"
//   ) {
//     return value;
//   }

//   if (Array.isArray(value)) {
//     const result = [];
//     value.forEach((item) => {
//       result.push(deepClone(item));
//     });
//     return result;
//   }

//   if (typeof value === "object") {
//     const result = {};

//     for (const key in value) {
//       result[key] = deepClone(value[key]);
//     }
//     return result;
//   }
// }