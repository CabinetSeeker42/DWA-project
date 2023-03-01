const initialOrderState = {
  textCode: "",
};

export function orderReducer(state = initialOrderState, action) {
  switch (action.type) {
    case "setTextCode":
      return {
        ...state,
        textCode: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
