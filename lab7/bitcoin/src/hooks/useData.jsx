import { useState, useEffect } from "react";

//   custom hook to process fetch data for any url
export function useData(url, dependency) {
  const [loading, setLoading] = useState(true);
  const [rawValue, setValue] = useState(null);
  const [error, setError] = useState(null);

  //   fetches data on initial render and when currency changes
  useEffect(() => {
    console.log("Fetching data from api");
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setValue(data);
          console.log(data);
        }

        // cleanup function
        return () => {
          ignore = "true"; // ignoers invalid fetch results
          console.log("cleanup applied");
        };
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(
        setLoading(false)
      );
  }, [dependency]);

  return {rawValue, loading, error};
}
