const initialReactionState = {
  reactionCreationPath: "upload",
  reactionUploadVisualState: 1, // 1 is recording/uploading, 2 is rewatching the video
  reactionUploaded: false,
  reaction: "",
};

export function reactionReducer(state = initialReactionState, action) {
  switch (action.type) {
    case "setReactionCreationPath":
      return {
        ...state,
        reactionCreationPath: action.payload,
      };

    case "setReactionUploaded":
      return {
        ...state,
        reactionUploaded: true,
      };

    case "changeReactionUploadVisualState":
      return {
        ...state,
        reactionUploadVisualState: action.payload,
      };

    case "setReaction":
      return {
        ...state,
        reaction: action.payload,
      };

    case "resetReaction":
      return {
        ...state,
        reaction: "",
      };

    case "addTextReaction":
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}
