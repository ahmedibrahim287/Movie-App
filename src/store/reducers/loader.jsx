const INITIAL_STATE = {
  isLoading: false,
};

export function loaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
