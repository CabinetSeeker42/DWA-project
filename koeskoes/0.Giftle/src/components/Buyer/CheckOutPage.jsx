import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Message from "../Common/CreateMessage";

// import images from assets folder
import socks from "./../../assets/socks.png";
import backpack from "./../../assets/rugtas.png";

// import SVG as ReactComponent for easier use
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

/**
 * This is a temporary page simulating the CheckOutPage
 * @returns the front end of the CheckOutPage
 */
function CheckOutPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isGiftleEnabled, setGiftleEnabled] = useState(false);

  // Buyer variables
  const [emailBuyer, setEmailBuyer] = useState(null);
  const [firstNameBuyer, setFirstNameBuyer] = useState(null);
  const [lastNameBuyer, setLastNameBuyer] = useState(null);
  // Receiver variables
  const [emailReceiver, setEmailReceiver] = useState(null);
  const [firstNameReceiver, setFirstNameReceiver] = useState(null);
  const [lastNameReceiver, setLastNameReceiver] = useState(null);

  /**
   * This function will send the data of the buyer and receiver to the database.
   */
  const saveReceiverData = async () => {
    const validatedInputs = validateInputs();

    // Validate all input fields
    if (validatedInputs.status === "error") {
      return setError(Message(validatedInputs.message, () => setError(null)));
    }

    if (isGiftleEnabled) {
      const formData = new FormData();

      // formData append buyer details to database
      formData.append("emailBuyer", emailBuyer);
      formData.append("firstNameBuyer", firstNameBuyer.trim());
      formData.append("lastNameBuyer", lastNameBuyer);

      // formData append receiver details to database
      formData.append("emailReceiver", emailReceiver);
      formData.append("firstNameReceiver", firstNameReceiver.trim());
      formData.append("lastNameReceiver", lastNameReceiver);

      const createOrder = await axios.post(
        `${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/newOrder`,
        formData,
      );

      if (createOrder.data.status === "error") {
        return setError(
          Message(createOrder.data.message, () => setError(null)),
        );
      } else {
        return navigate("/checked-out");
      }
    }
    return navigate("/magento-checked-out");
  };

  /**
   * This function will validate all input fields. It validates: correct email format, maximum length and empty strings.
   * @returns true if all input fields got through the validation.
   */
  const validateInputs = () => {
    let regexEmail = /\S+@\S+\.\S+/;
    let maxLength = 300;

    // Check if e-mail buyer and receiver is valid email address
    if (!regexEmail.test(emailBuyer)) {
      return {
        status: "error",
        message:
          "Uw e-mailadres is helaas niet geldig. Een e-mailadres moet op dit formaat lijken: naam@domein.com",
      };
    }

    // Check if e-mail buyer is not empty
    if (emailBuyer === null || emailBuyer.trim() === "") {
      return {
        status: "error",
        message:
          "Uw e-mailadres mag niet leeg zijn. Een e-mailadres moet minimaal 1 teken bevatten.",
      };
    }

    // Check if e-mail is not empty and has a valid email format
    if (emailReceiver !== null && emailReceiver !== "") {
      if (!regexEmail.test(emailReceiver)) {
        return {
          status: "error",
          message:
            "Vul een geldig e-mailadres voor de ontvanger in. Een e-mailadres moet op dit formaat lijken: naam@domein.com",
        };
      }
    }

    // Check if firstname buyer is not empty
    if (firstNameBuyer === null || firstNameBuyer.trim() === "") {
      return {
        status: "error",
        message:
          "Uw voornaam mag niet leeg zijn. Een voornaam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if lastname buyer is not empty
    if (lastNameBuyer === null || lastNameBuyer === "") {
      return {
        status: "error",
        message:
          "Uw achternaam mag niet leeg zijn. Een achternaam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if firstname buyer is not bigger than 300 characters
    if (firstNameBuyer.length > maxLength) {
      return {
        status: "error",
        message: `Uw voornaam is te lang. De voornaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    // Check if lastname buyer is not bigger than 300 characters
    if (lastNameBuyer.length > maxLength) {
      return {
        status: "error",
        message: `Uw achternaam is te lang. De achternaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    // Check if firstname receiver is not empty
    if (firstNameReceiver === null || firstNameReceiver.trim() === "") {
      return {
        status: "error",
        message:
          "Een voornaam van de ontvanger mag niet leeg zijn. Een voornaam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if lastname receiver is not empty
    if (lastNameReceiver === null || lastNameReceiver === "") {
      return {
        status: "error",
        message:
          "De achternaam van de ontvanger mag niet leeg zijn. Een achternaam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if firstname receiver is not bigger than 300 characters
    if (firstNameReceiver.length > maxLength) {
      return {
        status: "error",
        message: `De voornaam van de ontvanger is te lang. De voornaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    // Check if lastname receiver is not bigger than 300 characters
    if (lastNameReceiver.length > maxLength) {
      return {
        status: "error",
        message: `De achternaam van de ontvanger is te lang. De achternaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    return true;
  };

  return (
    <div className="vertical-center colored-background p-4">
      {error}
      <div className="container-fluid">
        <div className="row justify-content-evenly text-start">
          <div className="col-lg-4 mt-3 vertical-col position-relative bg-light">
            <h2>
              <span className="square mt-3 text-center bg-primary">
                <p className="square-text text-white">1.</p>
              </span>{" "}
              Klantgegevens
            </h2>
            <hr />
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </span>
              <input
                type="email"
                id="emailBuyer"
                className="form-control"
                onChange={(e) => setEmailBuyer(e.target.value)}
                placeholder="Uw eigen e-mailadres"
                aria-label="E-mailadres"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                id="firstnameBuyer"
                className="form-control"
                onChange={(e) => setFirstNameBuyer(e.target.value)}
                placeholder="Uw voornaam"
                aria-label="Voornaam"
                required
              />
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                </svg>
              </span>
              <input
                type="text"
                id="lastnameBuyer"
                className="form-control"
                onChange={(e) => setLastNameBuyer(e.target.value)}
                placeholder="Uw achternaam"
                aria-label="Achternaam"
                required
              />
            </div>
            <div className="input-group mb-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  disabled
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Maak een account aan
                </label>
              </div>
            </div>
            <h2>
              <span className="square mt-3 text-center bg-primary">
                <p className="square-text text-white">2.</p>
              </span>{" "}
              Verzendadres
            </h2>
            <hr />
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </span>
              <input
                type="emailReceiver"
                id="emailReceiver"
                className="form-control"
                onChange={(e) => setEmailReceiver(e.target.value)}
                placeholder="E-mailadres van de ontvanger"
                aria-label="E-mailadres"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                id="firstnameReceiver"
                className="form-control"
                onChange={(e) => setFirstNameReceiver(e.target.value)}
                placeholder="Voornaam van de ontvanger"
                aria-label="Voornaam"
                required
              />
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                </svg>
              </span>
              <input
                type="text"
                id="lastnameReceiver"
                className="form-control"
                onChange={(e) => setLastNameReceiver(e.target.value)}
                placeholder="Achternaam van de ontvanger"
                aria-label="Achternaam"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Straatnaam"
                aria-label="Straatnaam"
                disabled
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-mailbox2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Postcode"
                aria-label="Postcode"
                disabled
              />
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Plaats"
                aria-label="Plaats"
                disabled
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                </svg>
              </span>
              <select className="form-select text-muted" disabled>
                <option selected disabled>
                  Selecteer land
                </option>
                <option value="nederland">Nederland</option>
                <option value="belgie">België</option>
                <option value="duitsland">Duitsland</option>
              </select>
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
              </span>
              <select className="form-select text-muted" disabled>
                <option selected disabled>
                  Selecteer regio
                </option>
                <option value="nederland">Gelderland</option>
                <option value="belgie">Limburg</option>
                <option value="duitsland">Groningen</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Telefoonnummer"
                aria-label="Phone-number"
                disabled
              />
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Bedrijf"
                aria-label="Company"
                disabled
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-3 col-xl-4 mt-3 vertical-col bg-light">
            <h2>
              <span className="square mt-3 text-center bg-primary">
                <p className="square-text text-white">3.</p>
              </span>{" "}
              Verzendopties
            </h2>
            <hr />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option1"
                disabled
              />
              <label className="form-check-label">
                Standaard verzending (€ 6,95)
              </label>
            </div>
            <hr className="style-dotted" />
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option2"
                disabled
              />
              <label className="form-check-label">
                Snelle verzending (€ 13,95)
              </label>
            </div>
            <h5>Bezorgopties</h5>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </span>
              <input type="date" className="form-control" disabled />
            </div>
            <h5>Opmerking</h5>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
              <textarea
                className="form-control"
                placeholder="Plaats hier uw opmerking"
                rows="2"
                disabled
              />
            </div>
            <h2>
              <span className="square mt-5 text-center bg-primary">
                <p className="square-text text-white">4.</p>
              </span>{" "}
              Betaalmethode
            </h2>
            <hr />
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option1"
                disabled
              />
              <label className="form-check-label">PayPal</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option2"
                disabled
              />
              <label className="form-check-label">iDeal</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option2"
                disabled
              />
              <label className="form-check-label">Creditcard</label>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value="option2"
                disabled
              />
              <label className="form-check-label">Bankoverschrijving</label>
            </div>
            <h5>Kortingscode</h5>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-percent"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Uw kortingscode indien van toepassing"
                disabled
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-3 mt-3 vertical-col bg-light">
            <h2>
              <span className="square mt-3 text-center bg-primary">
                <p className="square-text text-white">✔</p>
              </span>{" "}
              Bestelling
            </h2>
            <hr />
            <div className="row">
              <div className="col-4">
                <h5>Product</h5>
              </div>
              <div className="col-3">
                <h5>Aantal</h5>
              </div>
              <div className="col-3">
                <h5>Subtotaal</h5>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row">
              <div className="col-4 text-center">
                <img src={backpack} className="img-thumbnail" alt="" />
                <div className="badge bg-primary text-wrap w-100">
                  Rugtas kleurrijk
                </div>
              </div>
              <div className="col-3 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash-square-fill mt-1 text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                </svg>
                <p className="px-2">1</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-square-fill mt-1 text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <div className="col-3">
                <p>€ 59,00</p>
              </div>
              <div className="col-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-square-fill text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className="style-dotted" />
            <div className="row">
              <div className="col-4">
                <img src={socks} className="img-thumbnail" alt="" />
                <div className="badge bg-primary text-wrap w-100">
                  Sokken met bladprint
                </div>
              </div>
              <div className="col-3 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash-square-fill mt-1 text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                </svg>
                <p className="px-2">1</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-square-fill mt-1 text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <div className="col-3">
                <p>€ 22,00</p>
              </div>
              <div className="col-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-square-fill text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-7 text-end">
                <p className="mb-0">Winkelwagen subtotaal</p>
              </div>
              <div className="col-5 text-end">
                <p className="mb-0">€ 81,00</p>
              </div>
            </div>
            <div className="row">
              <div className="col-7 text-end">
                <p className="mb-0">Verzendkosten</p>
              </div>
              <div className="col-5 text-end">
                <p className="mb-0">€ &nbsp;&nbsp;6,95</p>
              </div>
            </div>
            <hr />
            <div className="row mb-3">
              <div className="col-7 text-end">
                <p className="mb-0">Totaal</p>
              </div>
              <div className="col-5 text-end">
                <p className="mb-0">
                  {isGiftleEnabled ? "€ 88,94" : "€ 87,95"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-4">
                <div
                  className="form-check"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Via Giftle kunt u een videoboodschap versturen met uw cadeau mee"
                >
                  <input
                    id="checkBoxGiftle"
                    className="form-check-input"
                    type="checkbox"
                    value={isGiftleEnabled}
                    onClick={(e) => setGiftleEnabled(e.target.checked)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Voeg <b>een Giftle</b> toe aan uw bestelling{" "}
                    <i>(+€ 0,99)</i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-question-circle-fill ms-2 text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    disabled
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Registreer mij voor de nieuwsbrief
                  </label>
                </div>
              </div>
              <div className="col-12 mt-4 mb-2 text-end" id="createOrder">
                <button className="btn btn-primary" onClick={saveReceiverData}>
                  Plaats bestelling&nbsp;
                  {<RightArrow />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
