export const addToFav = (payload) => {
  return {
    type: "SET_ADDFAV",
    payload,
  };
};
export const removeFromFav = (payload) => {
  return {
    type: "SET_REMOVEFAV",
    payload,
  };
};
