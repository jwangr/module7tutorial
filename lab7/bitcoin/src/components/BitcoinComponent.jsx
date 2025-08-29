import { useEffect, useReducer, useState } from "react";

export default function BitcoinComponent() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

  const [value, dispatch] = useReducer(valueReducer, {
    loading: true,
    value: null,
    error: null,
  });

  //   fetches data on initial render and when currency changes
  useEffect(() => {
    console.log("Fetching data from api");
    let ignore = false;

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          let value = data.bitcoin;
          value = value[`${currency.toLowerCase()}`];

          dispatch({
            type: "success",
            payload: value,
          });
        }

        // cleanup function
        return () => {
          ignore = "true"; // ignoers invalid fetch results
          console.log("cleanup applied");
        };
      })
      .catch((err) => {
        dispatch({
          type: "error",
          payload: err,
        });
      });
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate: ${value.value}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}

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
