import axios from "axios";
import {
  CREATE_BLOG,
  UPDATE_BLOG,
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  SET_IS_FETCHING,
} from "../constants/index";

export const setIsFetching = (status) => {
  return {
    type: SET_IS_FETCHING,
    payload: status,
  };
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    const res = await axios.get("http://localhost:8000/blogs");
    console.log("get all blogs", res);
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_BLOGS,
        isFetching: false,
        payload: res.data,
      });
    }else{
        dispatch(setIsFetching(false))
    }
  } catch (error) {
    console.log("error", error.message);
  }
};
