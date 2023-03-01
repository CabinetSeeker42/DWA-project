import axios from "axios";

export const setVideoCreationPath = (videoCreationPath) => {
  return {
    type: "setVideoCreationPath",
    payload: videoCreationPath,
  };
};

export const setVideoUploaded = () => {
  return {
    type: "setVideoUploaded",
  };
};

export const setPersonalized = () => {
  return {
    type: "setPersonalized",
  };
};

export const changeUploadVisualState = (state) => {
  return {
    type: "changeUploadVisualState",
    payload: state,
  };
};

export const setReaction = (mailInfo) => {
  return {
    type: "setReaction",
    payload: mailInfo,
  };
};

export const sendReaction = (textCode, type) => {
  return async (dispatch) => {
    const mailInfo = await axios.post(
      `${process.env.REACT_APP_SERVERHOSTNAME}/api/mails/reaction/${type}/${textCode}`
    );

    if (mailInfo.data.status === "success") {
      dispatch(setReaction(mailInfo.data));
      await axios.patch(
        `${process.env.REACT_APP_SERVERHOSTNAME}/api/mails/reaction/sent/${textCode}`
      );
    } else {
      console.log(mailInfo.data);
    }
  };
};
