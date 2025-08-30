import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import Emoji from "./Emoji";

export default function BitcoinComponent() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);

  //   custom hook to process fetch data
  //   deconstruct return value into
  const state = useData(
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
        {state.loading ? (
          <span>Loading...</span>
        ) : (
          <span>${extractValue(state.value)}</span>
        )}{" "}
      </h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {state.error && <div>{state.error}</div>}

      <Emoji />
    </div>
  );
}
