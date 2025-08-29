import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

export default function BitcoinComponent() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);

  //   custom hook to process fetch data
  const { rawValue, loading, error } = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
    currency
  );

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const extractValue = (rawValue) => {
    if (rawValue) {
      let value = rawValue.bitcoin;
      value = value[`${currency.toLowerCase()}`];
      return value;
    }
    return null;
  };

  return (
    <div className="BitcoinRates componentBox">
      <h3>
        Bitcoin Exchange Rate:{" "}
        {loading ? (
          <span>Loading...</span>
        ) : (
          <span>${extractValue(rawValue)}</span>
        )}{" "}
      </h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {error && <div>{error}</div>}
    </div>
  );
}

//   const [value, dispatch] = useReducer(valueReducer, {
//     loading: true,
//     value: null,
//     error: null,
//   });

// `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
//   let value = data.bitcoin;
//   value = value[`${currency.toLowerCase()}`];

// loading, error, value
function valueReducer(valueState, action) {
  switch (action.type) {
    case "success":
      return { loading: false, value: action.payload, error: "" };

    case "error":
      return { loading: false, value: null, error: action.payload };

    default:
      return { ...valueState, loading: false };
  }
}
