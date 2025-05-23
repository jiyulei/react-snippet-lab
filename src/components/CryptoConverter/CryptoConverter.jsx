import { useState, useEffect, useRef } from "react";

export const CryptoConverter = () => {
  const [input, setInput] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [wuc, setWuc] = useState(0);
  const [diff, setDiff] = useState(null);
  // 使用useRef来存储上一次的值
  const prevWuc = useRef(0);
  const result = wuc * input;
  //unicode 箭头
  const arrow = diff > 0 ? "\u2191" : "\u2193";

  useEffect(() => {
    prevWuc.current = 0;
    setDiff(null);
    const fetchData = async (newCurrency) => {
      const response = await fetch(
        `https://api.frontendeval.com/fake/crypto/${newCurrency}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      const prevPrice = prevWuc.current;
      if (prevPrice !== 0) {
        setDiff(((data.value - prevPrice) / prevPrice) * 100);
      }

      prevWuc.current = data.value;
      setWuc(data.value);
    };

    fetchData(currency);
    const timeId = setInterval(() => {
      fetchData(currency);
    }, 3000);

    return () => clearInterval(timeId);
  }, [currency]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select name="currency" onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CNY">CNY</option>
          <option value="JPY">JPY</option>
        </select>
      </div>
      <div>
        {result.toFixed(2)} WUC{" "}
        <span style={{ color: `${diff > 0 ? "green" : "red"}` }}>
          {diff && <span>{arrow + diff?.toFixed(2)}</span>}
        </span>
      </div>
    </div>
  );
};
