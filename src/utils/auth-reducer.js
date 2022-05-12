const initialUserState = {
  userToken: localStorage.getItem("userToken"),
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || {
    createdAt: "",
    updatedAt: "",
    email: "",
    firstName: "",
    lastName: "",
    id: "",
    _id: "",
    likes: [],
    playlists: [],
    history: [],
    watchlater: [],
  },
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userDetails: payload.foundUser,
        userToken: payload.encodedToken,
      };

    case "LOG_IN":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userDetails: payload.foundUser,
        userToken: payload.encodedToken,
      };

    case "LOG_OUT":
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      return { ...initialUserState };

    default:
      return state;
  }
};
export { authReducer, initialUserState };
