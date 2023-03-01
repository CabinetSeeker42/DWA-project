import React from "react";
import {
  setReceivedPageNumber,
  setReceivedPageNumbers,
} from "../../redux/actions/employeeActions";
import { useSelector, useDispatch } from "react-redux";

// import SVG as ReactComponent for easier use
import { ReactComponent as TextCode } from "../../assets/textcode.svg";
import axios from "axios";

/**
 *
 * React component for receiving orders.
 *
 * @return front-end component for ReceivedOrders
 */
const ReceivedOrders = (props) => {
  const dispatch = useDispatch();
  const receivedPageNumber = useSelector(
    (state) => state.employee.receivedPageNumber
  );
  const receivedPageNumbers = useSelector(
    (state) => state.employee.receivedPageNumbers
  );
  const webSocket = useSelector((state) => state.employee.webSocket);

  /**
   *
   * This function will create the pagination for the table so employees can move through different pages of props.orders.
   *
   * @return Table with orders and pagination if exists
   */
  const pagination = () => {
    const pages = [];

    for (let i = 1; i <= receivedPageNumbers; i++) {
      pages.push(
        <li
          key={i}
          className={
            "page-item " + (receivedPageNumber === i ? "disabled" : "")
          }
          onClick={(e) => dispatch(setReceivedPageNumber(i))}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }

    return (
      <ul className="pagination">
        <li
          key={"lt"}
          className={
            "page-item " + (receivedPageNumber === 1 ? "disabled" : "")
          }
          onClick={() =>
            receivedPageNumber !== 1
              ? dispatch(setReceivedPageNumber(receivedPageNumber - 1))
              : null
          }
        >
          <span className="page-link">&lt;&lt;</span>
        </li>
        {pages}
        <li
          key={"gt"}
          className={
            "page-item " +
            (receivedPageNumber >= receivedPageNumbers ? "disabled" : "")
          }
          onClick={(e) =>
            receivedPageNumber < receivedPageNumbers
              ? dispatch(setReceivedPageNumber(receivedPageNumber + 1))
              : null
          }
        >
          <span className="page-link">&gt;&gt;</span>
        </li>
      </ul>
    );
  };

  const sendCode = async (textCode) => {
    const mailInfo = await axios.post(
      `${process.env.REACT_APP_SERVERHOSTNAME}/api/mails/${textCode}`
    );

    if (mailInfo.data.status === "error") {
      if (props.setError)
        return props.setError(mailInfo.data.message, props.setError(null));
    }

    webSocket.send(JSON.stringify({ action: "getReceived" }));
  };

  /**
   *
   * This function will update the list of orders to a usable list of props.orders.
   * This list can be used in a table that employees use before sending out props.orders.
   *
   * @returns List of mapped orders if exists, otherwise returns nothing
   */
  const updateOrderList = () => {
    if (props.orders.length !== 0) {
      const mappedOrders = () => {
        if (props.orders.length > 10) {
          const j = props.orders.length,
            temporary = [],
            chunk = 10;
          for (let i = 0; i < j; i += chunk) {
            temporary.push(props.orders.slice(i, i + chunk));
          }

          if (receivedPageNumbers !== temporary.length) {
            dispatch(setReceivedPageNumbers(temporary.length));
          }

          return temporary;
        } else {
          const newOrders = [props.orders];

          if (receivedPageNumbers !== newOrders.length) {
            dispatch(setReceivedPageNumbers(newOrders.length));
          }

          return newOrders;
        }
      };

      return mappedOrders()[receivedPageNumber - 1].map((order) => {
        return (
          <tr key={order._id}>
            <th scope="row">{order._id}</th>
            <td>
              {order.firstNameGifter} {order.lastNameGifter}
            </td>
            <td>{order.emailGifter}</td>
            <td>
              {order.firstNameReceiver} {order.lastNameReceiver}
            </td>
            <td>{order.emailReceiver}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => sendCode(order.textCode)}
              >
                Verstuur code&nbsp;
                <TextCode />
              </button>
            </td>
          </tr>
        );
      });
    }
    return null;
  };

  return (
    <>
      <table className="table" id="checkOrdersTable">
        <thead>
          <tr>
            <th scope="col">Ordernummer</th>
            <th scope="col">Naam koper</th>
            <th scope="col">E-mail koper</th>
            <th scope="col">Naam ontvanger</th>
            <th scope="col">E-mail ontvanger</th>
            <th scope="col">Code versturen</th>
          </tr>
        </thead>
        <tbody>{updateOrderList()}</tbody>
      </table>
      {pagination()}
    </>
  );
};

export default ReceivedOrders;
