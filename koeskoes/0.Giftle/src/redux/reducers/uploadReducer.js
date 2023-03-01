const initialUploadState = {
  videoCreationPath: "upload",
  uploadVisualState: 1, // 1 is recording/uploading, 2 is rewatching the video, 3 is personalisation form
  videoUploaded: false,
  personalized: false,
  reaction: {},
};

export function uploadReducer(state = initialUploadState, action) {
  switch (action.type) {
    case "setVideoCreationPath":
      return {
        ...state,
        videoCreationPath: action.payload,
      };

    case "setVideoUploaded":
      return {
        ...state,
        videoUploaded: true,
      };

    case "setPersonalized":
      return {
        ...state,
        personalized: true,
      };

    case "changeUploadVisualState":
      return {
        ...state,
        uploadVisualState: action.payload,
      };

    case "setReaction":
      return {
        ...state,
        reaction: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
