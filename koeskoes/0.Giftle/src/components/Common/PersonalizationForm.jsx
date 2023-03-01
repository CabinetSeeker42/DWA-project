import React, { useState } from "react";
import axios from "axios";
import Message from "./CreateMessage";
import { useSelector } from "react-redux";

// import SVG as ReactComponent for easier use
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

/**
 *
 * React component to rewatch a video.
 *
 * @return the front-end for the personalization page
 */
function PersonalizationForm(props) {
  const textCode = useSelector((state) => state.orders.textCode);
  const firstNameAlreadyReceived = useSelector(
    (state) => state.videos.video.firstNameReceiver
  );
  const lastNameAlreadyReceived = useSelector(
    (state) => state.videos.video.lastNameReceiver
  );
  const emailAlreadyReceived = useSelector(
    (state) => state.videos.video.emailReceiver
  );
  const [firstNameReceiver, setFirstNameReceiver] = useState(
    firstNameAlreadyReceived
  );
  const [lastNameReceiver, setLastNameReceiver] = useState(
    lastNameAlreadyReceived
  );
  const [emailReceiver, setEmailReceiver] = useState(emailAlreadyReceived);

  /**
   * This function will send the data of the receiver to the server.
   */
  const saveReceiverData = async () => {
    const validatedInputs = validateInputs();

    if (validatedInputs.status === "error") {
      return props.setError
        ? props.setError(
            Message(validatedInputs.message, () => props.setError(null))
          )
        : null;
    }

    const formData = new FormData();

    formData.append("firstNameReceiver", firstNameReceiver.trim());
    formData.append("lastNameReceiver", lastNameReceiver);
    formData.append("emailReceiver", emailReceiver);

    const uploadResponse = await axios.patch(
      `${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/new/` + textCode,
      formData
    );

    if (uploadResponse.data.status === "error") {
      return props.setError
        ? props.setError(
            Message(uploadResponse.data.message, () => props.setError(null))
          )
        : null;
    } else {
      // return setIsNextPage(true);
      // Do something after adding personalized data.
      if (props.next) props.next();
    }
  };

  /**
   * This function will validate the input fields.
   * @returns true if there is no error from the input fields.
   */
  const validateInputs = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    const maxLength = 300;

    if (emailReceiver !== null && emailReceiver !== "") {
      if (!regexEmail.test(emailReceiver)) {
        return {
          status: "error",
          message:
            "Vul een geldig e-mailadres in. Een e-mailadres moet op dit formaat lijken: naam@domein.com",
        };
      }
    }

    // Check if firstname is not empty
    if (firstNameReceiver === null || firstNameReceiver === "") {
      return {
        status: "error",
        message:
          "De voornaam van de ontvanger mag niet leeg zijn. Een naam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if lastname is not empty
    if (lastNameReceiver === null || lastNameReceiver === "") {
      return {
        status: "error",
        message:
          "De voornaam van de ontvanger mag niet leeg zijn. Een naam moet minimaal 1 teken bevatten.",
      };
    }

    // Check if firstname receiver is not bigger than 300 characters
    if (firstNameReceiver.length > maxLength) {
      return {
        status: "error",
        message: `De voornaam die je hebt ingevuld is te lang! Een voornaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    // Check if lastname receiver is not bigger than 300 characters
    if (lastNameReceiver.length > maxLength) {
      return {
        status: "error",
        message: `De achternaam die je hebt ingevuld is te lang! Een achternaam mag maximaal ${maxLength} karakters lang zijn.`,
      };
    }

    return true;
  };

  return (
    <>
      <div className="row">
        <h1>Personaliseren</h1>
      </div>
      <p>
        Om de video bij de juiste persoon aan te laten komen, hebben we de naam
        van deze persoon nodig! Ook is het mogelijk om per mail een tekstcode te
        versturen naar de ontvanger. Hiermee kan de video ook geopend en bekeken
        worden. Wil je dit? Vul dan ook zijn mail hieronder in.
      </p>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <br />
          <label className="form-label">Voornaam van de ontvanger</label>
          <input
            type="name"
            className="form-control"
            id="firstNameReceiver"
            name="firstNameReceiver"
            value={firstNameReceiver}
            onChange={(e) => setFirstNameReceiver(e.target.value)}
            disabled={props.disabled ? props.disabled : false}
          />
          <br />
          <label className="form-label">Achternaam van de ontvanger</label>
          <input
            type="name"
            className="form-control"
            id="lastNameReceiver"
            name="lastNameReceiver"
            value={lastNameReceiver}
            onChange={(e) => setLastNameReceiver(e.target.value)}
            disabled={props.disabled ? props.disabled : false}
          />
          <br />
          <label htmlFor="emailReceiver" className="form-label">
            E-mailadres van de ontvanger
          </label>
          <input
            type="email"
            className="form-control"
            id="emailReceiver"
            name="emailReceiver"
            value={emailReceiver}
            onChange={(e) => setEmailReceiver(e.target.value)}
            disabled={props.disabled ? props.disabled : false}
          />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
      </div>
      <br />
      <br />
      <button
        id="sendVideoMessage"
        className="btn btn-primary"
        onClick={saveReceiverData}
        disabled={props.disabled ? props.disabled : false}
      >
        Versturen&nbsp;
        <RightArrow />
      </button>
    </>
  );
}

export default PersonalizationForm;
