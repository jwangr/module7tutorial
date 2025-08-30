import { useState, useEffect, useReducer } from "react";
import { valueReducer } from "./valueReducer";

//   custom hook to process fetch data for any url
export function useData(url, dependency) {
  const [value, dispatch] = useReducer(valueReducer, {
    loading: true,
    rawValue: null,
    error: null,
  });

  //   fetches data on initial render and when currency changes
  useEffect(() => {
    console.log("Fetching data from api");
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          dispatch({
            type: "success",
            payload: data,
          });
        }

        // cleanup function
        return () => {
          ignore = "true"; // ignoers invalid fetch results
          console.log("cleanup applied");
        };
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "error",
          payload: data,
        });
      })
  }, [dependency]);

  return value;
}
