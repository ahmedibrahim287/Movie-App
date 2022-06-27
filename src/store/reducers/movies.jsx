const INITIAL_STATE = {
  list: [],
  details: {},
};

export function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
