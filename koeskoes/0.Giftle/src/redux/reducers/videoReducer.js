const initialVideoState = {
  video: "",
  watched: false,
  selectedCamera: "",
  selectedRecordingQuality: "720",
};

export function videoReducer(state = initialVideoState, action) {
  switch (action.type) {
    case "setVideo":
      return {
        ...state,
        video: action.payload,
      };

    case "resetVideo":
      return {
        ...state,
        video: "",
      };

    case "setVideoWatched":
      return {
        ...state,
        watched: true,
      };

    case "setSelectedCamera":
      return {
        ...state,
        selectedCamera: action.payload,
      };

    case "setSelectedRecordingQuality":
      return {
        ...state,
        selectedRecordingQuality: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
