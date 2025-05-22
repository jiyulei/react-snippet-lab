import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./styles.css";
export const TodoList = () => {
  const cachedList = JSON.parse(localStorage.getItem("todo"));
  const [lists, setLists] = useState(cachedList || []);

  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }
    setLists((prev) => [
      ...prev,
      { id: uuid(), name: inputValue, checked: false },
    ]);
    setInputValue("");
  };

  const handleCheck = (id, checked) => {
    setLists((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked } : item))
    );
  };

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleDelete = (id) => {
    const updatedList = lists.filter((item) => item.id !== id);
    setLists(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddItem();
          }}
        />

        <button onClick={handleAddItem}>Add</button>
      </div>
      <div className="listItems">
        {lists.map(({ id, name, checked }) => (
          <ListItem
            key={id}
            id={id}
            label={name}
            checked={checked}
            onChange={handleCheck}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

function ListItem({ checked, label, onChange, id, onDelete }) {
  return (
    <div className="listItem">
      <div className="item">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(id, e.target.checked)}
        />
        <label>{label}</label>
      </div>

      <button className="deleteButton" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
}
