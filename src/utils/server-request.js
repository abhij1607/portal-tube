import axios from "axios";

const fetchVideos = async (dispatch) => {
  try {
    const response = await axios.get("/api/videos");
    dispatch({ type: "FETCH_VIDEOS", payload: response.data.videos });
  } catch (error) {
    console.log(error);
  }
};

const fetchCategories = async (dispatch) => {
  try {
    const response = await axios.get("/api/categories");
    dispatch({ type: "FETCH_CATEGORIES", payload: response.data.categories });
  } catch (error) {
    console.log(error);
  }
};

const requestLogin = async (dispatch, body, navigate, location) => {
  try {
    const response = await axios.post("/api/auth/login", body);
    dispatch({ type: "LOG_IN", payload: response.data });
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

const requestSignUp = async (dispatch, requestBody, navigate, location) => {
  try {
    const response = await axios.post("/api/auth/signup", requestBody);
    dispatch({ type: "SIGN_UP", payload: response.data });
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

export { fetchVideos, fetchCategories, requestLogin, requestSignUp };
