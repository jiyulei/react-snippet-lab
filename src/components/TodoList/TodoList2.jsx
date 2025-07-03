import { useState } from "react";

export const TodoList2 = () => {
  const intitalList = [
    { id: 1, title: "lunch", check: false },
    { id: 2, title: "gym", check: true },
  ];
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(() => intitalList);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleListUpdate = () => {
    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }

    setList((prev) => [
      ...prev,
      { id: list.length + 1, title: inputValue, check: false },
    ]);
    setInputValue("");
  };

  const handleCheck = (checkId) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === checkId ? { ...item, check: !item.check } : item
      )
    );
  };

  const handleCheckBox = (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      const id = Number(e.target.dataset.id);
      handleCheck(id);
    }
  };

  return (
    <div>
      <div className="inputField">
        <div
          className="input"
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <label htmlFor="inputValue">Todo</label>
          <input
            id="inputValue"
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <button onClick={handleListUpdate}>add</button>
      </div>

      <div onChange={handleCheckBox}>
        {list.map((item) => (
          <div key={item.id}>
            {item.title}
            <span>
              <input
                type="checkbox"
                checked={item.check}
                onChange={() => {}}
                data-id={item.id}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
