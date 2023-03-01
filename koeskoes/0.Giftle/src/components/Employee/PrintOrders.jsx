import React from "react";
import {
  setOrderPageNumber,
  setOrderPageNumbers,
} from "../../redux/actions/employeeActions";
import { useSelector, useDispatch } from "react-redux";
import qrcode from "../Common/CreateQRcode";
import Message from "../Common/CreateMessage";
import axios from "axios";

// import SVG as ReactComponent for easier use
import { ReactComponent as QRCode } from "../../assets/qr-code.svg";
import { ReactComponent as Printer } from "../../assets/printer.svg";

/**
 *
 * React component for printing orders.
 *
 * @return front-end component for PrintOrders
 */
const PrintOrders = (props) => {
  const dispatch = useDispatch();
  const orderPageNumber = useSelector(
    (state) => state.employee.orderPageNumber
  );
  const orderPageNumbers = useSelector(
    (state) => state.employee.orderPageNumbers
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

    for (let i = 1; i <= orderPageNumbers; i++) {
      pages.push(
        <li
          key={i}
          className={"page-item " + (orderPageNumber === i ? "disabled" : "")}
          onClick={(e) => dispatch(setOrderPageNumber(i))}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }

    return (
      <ul className="pagination">
        <li
          key={"lt"}
          className={"page-item " + (orderPageNumber === 1 ? "disabled" : "")}
          onClick={(e) =>
            orderPageNumber !== 1
              ? dispatch(setOrderPageNumber(orderPageNumber - 1))
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
            (orderPageNumber >= orderPageNumbers ? "disabled" : "")
          }
          onClick={(e) =>
            orderPageNumber < orderPageNumbers
              ? dispatch(setOrderPageNumber(orderPageNumber + 1))
              : null
          }
        >
          <span className="page-link">&gt;&gt;</span>
        </li>
      </ul>
    );
  };

  /**
   *
   * This function will update the list of orders to a usable list of props.orders.
   * This list can be used in a table that employees use before sending out props.orders.
   *
   * @returns List of mapped orders if exists, otherwise returns nothing
   */
  const updateOrderList = (items) => {
    if (props.orders.length !== 0) {
      const mappedOrders = () => {
        if (props.orders.length > 10) {
          const j = props.orders.length,
            temporary = [],
            chunk = 10;
          for (let i = 0; i < j; i += chunk) {
            temporary.push(props.orders.slice(i, i + chunk));
          }

          if (orderPageNumbers !== temporary.length) {
            dispatch(setOrderPageNumbers(temporary.length));
          }

          return temporary;
        } else {
          const newOrders = [props.orders];

          if (orderPageNumbers !== newOrders.length) {
            dispatch(setOrderPageNumbers(newOrders.length));
          }

          return newOrders;
        }
      };

      return mappedOrders()[orderPageNumber - 1].map((order) => {
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
            <td>{buttonUpdate(order)}</td>
          </tr>
        );
      });
    }
    return null;
  };

  /**
   *
   * This function will create a QR-code with a data string.
   * This QR-code will be downloaded to the local machine.
   *
   * @param {String} orderNumber Puts the orderNumber in the orders URL
   */
  const createQRCode = async (textCode) => {
    try {
      const qrCode = qrcode(
        `${process.env.REACT_APP_CLIENTHOSTNAME}/receiver/watchvideo/${textCode}`
      );

      await axios.patch(`${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/${textCode}`);

      webSocket.send(JSON.stringify({ action: "getReceived" }));

      qrCode.download({ name: textCode, extension: "png" });
    } catch (e) {
      if (props.setError) {
        props.setError(
          Message(
            "Er is een fout opgetreden bij het maken van de QR-code.",
            () => props.setError(null)
          )
        );
      }
    }
  };

  /**
   *
   * This function makes it that the buttons linked to an order get rendered and updated on click
   * Employees get an extra check with printing, so that they won't missclick
   *
   * @param {Object} order this is the specific order, so that the click interaction and the id go to a specific single order
   * @returns the button that creates a qrcode and prints it if prePrinted is true
   *          else it will return the button that makes clear where to click.
   */
  const buttonUpdate = (order) => {
    if (order.prePrinted) {
      return (
        <button
          className="btn btn-success"
          id="printFinalOrder"
          onClick={(e) => createQRCode(order.textCode)}
        >
          Print QR-code&nbsp;
          <Printer />
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          id="prePrintOrder"
          onClick={async () => {
            await axios.patch(
              `${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/${order._id}/prePrint`
            );
            webSocket.send(JSON.stringify({ action: "getOrders" }));
          }}
        >
          Maak QR-code&nbsp;
          <QRCode />
        </button>
      );
    }
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
            <th scope="col">QR-code</th>
          </tr>
        </thead>
        <tbody>{updateOrderList()}</tbody>
      </table>
      {pagination()}
    </>
  );
};

export default PrintOrders;
