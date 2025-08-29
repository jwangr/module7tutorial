import { useEffect, useState } from "react";

export default function BitcoinComponent() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const [cost, setCost] = useState(null);

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
          console.log(value);
          setCost(value);
        }

        // cleanup function
        return () => {
          ignore = "true"; // ignoers invalid fetch results
          console.log("cleanup applied");
        };
      })
      .catch((err) => console.log(err));
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate: ${cost}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}
