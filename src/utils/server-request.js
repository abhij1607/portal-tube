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

export { fetchVideos, fetchCategories };
