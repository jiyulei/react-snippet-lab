import { useState, useEffect, useCallback } from "react";
import "./style.css";
import { debounce } from "./debounceUtil";

export const ShoppingList = () => {
  const [inputValue, setInputValue] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = async (input) => {
    if (input.length < 2) {
      setFoodList([]);
      return;
    }

    const response = await fetch(
      `https://api.frontendeval.com/fake/food/${input}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const dataList = await response.json();
    setFoodList(dataList);
  };

  const deBouncedFetch = useCallback(
    debounce(async (input) => {
      if (input.length < 2) {
        setFoodList([]);
        return;
      }

      const response = await fetch(
        `https://api.frontendeval.com/fake/food/${input}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const dataList = await response.json();
      setFoodList(dataList);
    }, 500),
    []
  );

  useEffect(() => {
    deBouncedFetch(inputValue);
  }, [inputValue, deBouncedFetch]);

  const handleClick = (food) => {
    setCart((prev) => [...prev, { name: food, checked: false }]);
    setInputValue("");
  };

  const handleDelete = (foodIndex) => {
    const newCart = [...cart].filter((_, index) => foodIndex !== index);
    setCart(newCart);
  };

  const handleCheck = (index) => {
    const newCart = [...cart];
    newCart[index].checked = !newCart[index].checked;

    setCart(newCart);
  };

  return (
    <div className="shoppingList">
      <h1>My Shopping List</h1>
      <div className="container">
        <input
          type="dropdown"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <DropdownList foodList={foodList} onClick={handleClick} />
        <CartList cart={cart} onDelete={handleDelete} onCheck={handleCheck} />
      </div>
    </div>
  );
};

function DropdownList({ foodList, onClick }) {
  const list = foodList.map((food, index) => (
    <div key={index} onClick={() => onClick(food)}>
      {food}
    </div>
  ));

  return <div className="dropDownList">{list}</div>;
}

function CartList({ cart, onDelete, onCheck }) {
  const cartList = cart.map((item, index) => (
    <div key={index} className="listItem">
      <div className="checkItem">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onCheck(index)}
        />
        <label
          className={`foodLabel ${item.checked ? "foodLabel--checked" : ""}`}
        >
          {item.name}
        </label>
      </div>
      <button
        className="xButton"
        onClick={() => onDelete(index)}
        disabled={item.checked}
      >
        X
      </button>
    </div>
  ));

  return cartList;
}
