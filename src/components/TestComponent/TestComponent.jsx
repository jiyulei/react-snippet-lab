
// event bubble
export function Test() {
  // 这里点击内部div后，先捕获外部outsideCapture
  // 再执行内部inside clicked
  // 再向上冒泡，执行outside（没有stopPropagation的情况）
  return (
    <div
      onClickCapture={() => console.log("outsideCapture")}
      onClick={() => console.log("outside")}
    >
      <div
        onClick={(e) => {
          //   e.stopPropagation();
          console.log("inside clicked");
        }}
      >
        click inside
      </div>
    </div>
  );
}
