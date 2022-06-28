const INITIAL_STATE = [];

export function favReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_ADDFAV":
      return [...state, action.payload];
    case "SET_REMOVEFAV":
      return [state.filter((movie) => movie.id !== action.payload.id)];
    default:
      return state;
  }
}

// const INITIAL_STATE = {
//   favouriteList: [],
//   counter: 0,
// };

// export function loaderReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "SET_ADDFAV":
//       return {
//         ...state,
//         isFav: action.payload,
//       };
//     case "SET_REMOVEFAV":
//       return;

//     default:
//       return state;
//   }
// }
