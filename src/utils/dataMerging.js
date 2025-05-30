export default function mergeData(sessions) {
  const map = {};
  const order = [];

  sessions.forEach((session) => {
    // 1.解构
    const { user, duration, equipment } = session;

    if (!map[user]) {
      // 2.注意不要修改输入的引用
      map[user] = { user, duration, equipment: [...equipment] };
      order.push(user);
    } else {
      map[user].duration += duration;
      // 3.去重 排序
      map[user].equipment = [
        ...new Set([...map[user].equipment, ...equipment]),
      ].sort();
    }
  });
  // 4.记录 order， 因为直接用Object.values()出来的顺序不一定是对象里面写着的顺序
  return order.map((i) => map[i]);
}

const sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

console.log(mergeData(sessions));
