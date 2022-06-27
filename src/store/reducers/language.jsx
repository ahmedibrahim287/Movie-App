const INITIAL_STATE = {
  currentLang: "en",
  availableLang: ["ar", "en", "fr"],
};

export function languageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        currentLang: action.payload,
      };

    default:
      return state;
  }
}
