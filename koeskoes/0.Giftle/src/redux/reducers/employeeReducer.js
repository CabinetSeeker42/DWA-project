const initialOrderState = {
  orders: [],
  filteredOrders: [],
  orderPageNumber: 1,
  orderPageNumbers: 1,
  received: [],
  filteredReceived: [],
  receivedPageNumber: 1,
  receivedPageNumbers: 1,
  searchParams: "",
  webSocket: null,
};

export function employeeReducer(state = initialOrderState, action) {
  switch (action.type) {
    case "setOrders":
      return {
        ...state,
        orders: action.payload,
      };

    case "setReceived":
      return {
        ...state,
        received: action.payload,
      };

    case "setSearch":
      const filteredOrders = state.orders.filter((order) => {
        for (const key in order) {
          if (("" + order[key]).includes(action.payload)) {
            return order;
          }
        }

        return null;
      });
      return {
        ...state,
        filteredOrders,
        searchParams: action.payload,
      };

    case "setOrderPageNumber":
      return {
        ...state,
        orderPageNumber: action.payload,
      };

    case "setOrderPageNumbers":
      return {
        ...state,
        orderPageNumbers: action.payload,
      };

    case "setReceivedPageNumber":
      return {
        ...state,
        receivedPageNumber: action.payload,
      };

    case "setReceivedPageNumbers":
      return {
        ...state,
        receivedPageNumbers: action.payload,
      };

    case "setWebSocket":
      return {
        ...state,
        webSocket: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
