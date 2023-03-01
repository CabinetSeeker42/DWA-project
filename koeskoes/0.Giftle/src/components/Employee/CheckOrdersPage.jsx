import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrders,
  getReceived,
  setSearch,
  setWebSocket,
} from "../../redux/actions/employeeActions";
import PrintOrders from "./PrintOrders";
import ReceivedOrders from "./ReceivedOrders";

/**
 *
 * CheckOrdersPage component has a list of orders within a table, for the employee to work with.
 * It has (valuable) data if exists, does have a feature to create a QR-code and has a feature
 * to search for specific data.
 *
 * @return List of mapped orders and QR-code if exists, otherwise returns nothing
 */
const CheckOrdersPage = () => {
  // Local variables
  const dispatch = useDispatch();
  const totalReceived = useSelector((state) =>
    state.employee.received.map((received) => received.printed === true)
  );
  const totalOrders = useSelector((state) =>
    state.employee.orders.map((order) => order.printed === false)
  );
  const orders = useSelector((state) =>
    state.employee.searchParams
      ? state.employee.filteredOrders
      : state.employee.orders
  );
  const received = useSelector((state) =>
    state.employee.searchParams
      ? state.employee.filteredReceived
      : state.employee.received
  );
  const searchParams = useSelector((state) => state.employee.searchParams);
  const webSocket = useSelector((state) => state.employee.webSocket);
  const [error, setError] = useState(null);
  const [table, setTable] = useState("Orders");

  // Use effect to update the list of orders.
  useEffect(() => {
    dispatch(getOrders());
    dispatch(getReceived());
  }, [dispatch]);

  useEffect(() => {
    if (webSocket) {
      const ws = webSocket;
      ws.onmessage = (message) => {
        const parsedMessage = JSON.parse(message.data);
        switch (parsedMessage.action) {
          case "getOrders":
            return dispatch(getOrders());
          case "getReceived":
            dispatch(getOrders());
            return dispatch(getReceived());

          default:
            return null;
        }
      };
      ws.onclose = () => {
        dispatch(setWebSocket());
      };
    } else {
      dispatch(setWebSocket());
    }
  }, [webSocket, dispatch]);

  return (
    <div className="vertical-center colored-background">
      {error}
      <div className="container-flex text-center rounded p-3 bg-light">
        <label htmlFor="searchParams">Zoeken:</label>{" "}
        <input
          type="text"
          name="searchParams"
          id="searchParams"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={searchParams}
        />
        <ul className="nav nav-tabs" id="orderTabs">
          <li className="nav-item">
            <button
              className={`nav-link ${table === "Orders" ? "active" : null}`}
              onClick={() => setTable((prevTable) => (prevTable = "Orders"))}
            >
              Orders [{totalOrders.length}]
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${table === "Received" ? "active" : null}`}
              onClick={() => setTable((prevTable) => (prevTable = "Received"))}
            >
              Geleverd [{totalReceived.length}]
            </button>
          </li>
        </ul>
        <div className="tab-content" id="orderContent">
          <div
            className={`tab-pane fade ${
              table === "Orders" ? "show active" : null
            }`}
          >
            <PrintOrders setError={setError} orders={orders} />
          </div>
          <div
            className={`tab-pane fade ${
              table === "Received" ? "show active" : null
            }`}
          >
            <ReceivedOrders setError={setError} orders={received} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOrdersPage;
