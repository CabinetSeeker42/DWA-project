import axios from "axios";
import { sendReaction } from "../../redux/actions/uploadActions";

export const setReactionCreationPath = (reactionCreationPath) => {
  return {
    type: "setReactionCreationPath",
    payload: reactionCreationPath,
  };
};

export const setReactionUploaded = () => {
  return {
    type: "setReactionUploaded",
  };
};

export const changeReactionUploadVisualState = (state) => {
  return {
    type: "changeReactionUploadVisualState",
    payload: state,
  };
};

export const setReaction = (reaction) => {
  return {
    type: "setReaction",
    payload: reaction,
  };
};

export const getReaction = (textCode) => {
  return async (dispatch) => {
    const reaction = await axios.get(
      `${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/reaction/${textCode}`
    );

    return dispatch(setReaction(reaction.data));
  };
};

export const addTextReaction = (textCode, message) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("text", message);
    await axios.patch(
      `${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/reaction/text/${textCode}`,
      formData
    );
    return dispatch(sendReaction(textCode, "text"));
  };
};

export const resetReaction = () => {
  return { type: "resetReaction" };
};
