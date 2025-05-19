import { useState, useEffect, useCallback } from "react";
import "./style.css";
import { debounce } from "./debounceUtil";

export const ShoppingList = () => {
  const [inputValue, setInputValue] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [cart, setCart] = useState([]);
  const [highlightedIndex, setHighLightedIndex] = useState(-1);

  // 阻止input框的默认行为，按下箭头键和回车键时，不会跳转
  // preventDefault放在条件中是因为只有当按键时，才会触发
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (foodList.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighLightedIndex((prev) => (prev + 1) % foodList.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighLightedIndex(
          (prev) => (prev - 1 + foodList.length) % foodList.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleClick(foodList[highlightedIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [foodList, highlightedIndex]);

  // const fetchData = async (input) => {
  //   if (input.length < 2) {
  //     setFoodList([]);
  //     return;
  //   }

  //   const response = await fetch(
  //     `https://api.frontendeval.com/fake/food/${input}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const dataList = await response.json();
  //   setFoodList(dataList);
  // };

  // 如果不放usecallback中，每次渲染都会重新生成一个函数，导致防抖失效
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
  // 更新state的值，需要使用新的变量，不能直接修改
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

        <DropdownList
          foodList={foodList}
          onClick={handleClick}
          highlightedIndex={highlightedIndex}
        />
        <CartList cart={cart} onDelete={handleDelete} onCheck={handleCheck} />
      </div>
    </div>
  );
};

function DropdownList({ foodList, onClick, highlightedIndex }) {
  const list = foodList.map((food, index) => (
    <div
      key={index}
      onClick={() => onClick(food)}
      className={index === highlightedIndex ? "highlighted" : ""}
    >
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
