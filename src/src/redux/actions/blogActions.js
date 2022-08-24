import axios from "axios";
import {
  CREATE_BLOG,
  UPDATE_BLOG,
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  GET_SINGLE_BLOG_ITEM,
  SET_IS_FETCHING,
  USER_LOGIN,
  DELETE_BLOG,
} from "../constants/index";
const {
  REACT_APP_API_ENDPOINT
} = process.env

export const getAllBlogs = (pageNumber) => async (dispatch) => {
  try {
    // dispatch(setIsFetching(true));
    // const res = await axios.get("http://localhost:4000/blogs");
    const res = await axios.get(
      `${REACT_APP_API_ENDPOINT}/blogs?page=${pageNumber}`
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ALL_BLOGS,
        isFetching: false,
        payload: res.data,
      });
    }
 
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getSingleBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${REACT_APP_API_ENDPOINT}/blogs/` + id
    );
    if (res.status === 200) {
      dispatch({
        type: GET_SINGLE_BLOG,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log("error in get single blog", error.message);
  }
};

export const getSingleBlogItem = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${REACT_APP_API_ENDPOINT}/blogs/` + id
    );
    if (res.status === 200) {
      dispatch({
        type: GET_SINGLE_BLOG_ITEM,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log("error in get single blog", error.message);
  }
};

export const updateBlog = (id, blogData, navigate) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${REACT_APP_API_ENDPOINT}/blogs/` + id,

      blogData
    );
    if (res.request.status === 200) {
      dispatch({
        type: UPDATE_BLOG,
        payload: res.data.data,
      });
      navigate("/");
    }
  } catch (error) {
    console.log("update blog error", error.message);
  }
};

export const addBlog = (blogData, token, navigate) => async (dispatch) => {
  for (var pair of blogData.entries()) {
    console.log(pair[0] + " - " + pair[1]);
  }
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      `${REACT_APP_API_ENDPOINT}/blogs`,
      blogData,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: CREATE_BLOG,
        payload: res.data.data,
      });
      navigate("/");
    }
  } catch (error) {
    console.log("error in adding Blog", error.message);
  }
};

export const deleteBlog = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${REACT_APP_API_ENDPOINT}/blogs/` + id
    );
    dispatch({
      type: DELETE_BLOG,
      payload: res.data.data,
    });
    navigate("/");
  } catch (error) {
    console.log("error in deleting blog", error.message);
  }
};

export const userLogin = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${REACT_APP_API_ENDPOINT}/users/login`,
      userData
    );
     localStorage.setItem("token", res.data.token);
     localStorage.setItem("userId", res.data.data._id);
     localStorage.setItem("username", res.data.data.username);

    if (res.request.status === 200) {
      dispatch({
        type: USER_LOGIN,
        payload: res.data,
      });
    }
    navigate("/");
  } catch (error) {
    console.log("error is user login", error.message);
  }
};
