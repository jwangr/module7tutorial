// state: {loading, error, value}
export function valueReducer(valueState, action) {
  switch (action.type) {
    case "success":
      return { loading: false, value: action.payload, error: "" };

    case "error":
      return { loading: false, value: null, error: action.payload };

    default:
      return { ...valueState, loading: false };
  }
}
