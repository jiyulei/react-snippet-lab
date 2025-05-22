import { useState } from "react";
import "./styles.css";
export function TransferList() {
  const [list, setList] = useState([
    { name: "html", label: "HTML", checked: false, column: "left" },
    { name: "js", label: "JavaScript", checked: false, column: "left" },
    { name: "css", label: "CSS", checked: false, column: "left" },
    { name: "ts", label: "TypeScript", checked: false, column: "left" },
    { name: "react", label: "React", checked: false, column: "left" },
    { name: "angular", label: "Angular", checked: false, column: "left" },
    { name: "vue", label: "Vue", checked: false, column: "right" },
    { name: "svelte", label: "Svelte", checked: false, column: "right" },
  ]);

  const handleCheck = (label, checked) => {
    const updatedList = list.map((item) =>
      item.label === label ? { ...item, checked } : item
    );
    setList(updatedList);
  };

  const handleMoveAllToLeft = () => {
    const updatedList = list.map((item) => ({ ...item, column: "left" }));
    setList(updatedList);
  };

  const handleMoveAllToRight = () => {
    const updatedList = list.map((item) => ({ ...item, column: "right" }));
    setList(updatedList);
  };

  const handleMoveToLeft = () => {
    const updatedList = list.map((item) =>
      item.checked ? { ...item, checked: false, column: "left" } : item
    );
    setList(updatedList);
  };

  const handleMoveToRight = () => {
    const updatedList = list.map((item) =>
      item.checked ? { ...item, checked: false, column: "right" } : item
    );
    setList(updatedList);
  };
  return (
    <div className="container">
      <div className="leftList">
        {list
          .filter((item) => item.column === "left")
          .map((item) => (
            <ListItem
              key={item.name}
              label={item.label}
              checked={item.checked}
              onChange={handleCheck}
            />
          ))}
      </div>
      <div className="buttonGroup">
        <button onClick={handleMoveToLeft}>{"<"}</button>
        <button onClick={handleMoveAllToLeft}>{"<<"}</button>
        <button onClick={handleMoveToRight}>{">"}</button>
        <button onClick={handleMoveAllToRight}>{">>"}</button>
      </div>
      <div className="rightList">
        {list
          .filter((item) => item.column === "right")
          .map((item) => (
            <ListItem
              key={item.name}
              label={item.label}
              checked={item.checked}
              onChange={handleCheck}
            />
          ))}
      </div>
    </div>
  );
}

function ListItem({ checked, label, onChange }) {
  return (
    <div className="listItem">
      <input
        type="checkbox"
        checked={checked}
        id={label}
        onChange={(e) => onChange(label, e.target.checked)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
