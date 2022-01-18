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

// export const setIsFetching = (status) => {
//   return {
//     type: SET_IS_FETCHING,
//     payload: status,
//   };
// };

export const getAllBlogs = (pageNumber) => async (dispatch) => {
  try {
    // dispatch(setIsFetching(true));
    // const res = await axios.get("http://localhost:4000/blogs");
    const res = await axios.get(
      `https://blogsite-server.herokuapp.com/blogs?page=${pageNumber}`
    );

    console.log("get all blogs", res);
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_BLOGS,
        isFetching: false,
        payload: res.data,
      });
    }
    // else {
    //   dispatch(setIsFetching(false));
    // }
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getSingleBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://blogsite-server.herokuapp.com/blogs/" + id
    );
    console.log("sinle blog response", res);
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
  console.log("getsingleblogitem id:", id);
  try {
    const res = await axios.get(
      "https://blogsite-server.herokuapp.com/blogs/" + id
    );
    console.log("sinle blog item response", res);
    if (res.status === 200) {
      dispatch({
        type: GET_SINGLE_BLOG_ITEM,
        payload: res.data.data,
      });
      // navigate(`/blogs/update-blog/${id}`);
    }
  } catch (error) {
    console.log("error in get single blog", error.message);
  }
};

export const updateBlog = (id, blogData, navigate) => async (dispatch) => {
  console.log("blogData for put request in action:", blogData);
  // console.log("naviaget", navigate);
  try {
    const res = await axios.put(
      "https://blogsite-server.herokuapp.com/blogs/" + id,
      blogData
    );
    console.log("update blog response", res);
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
  console.log("Navigate", navigate);
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log("add data in action", blogData);
    // console.log("navigate", navigate);
    const res = await axios.post(
      "https://blogsite-server.herokuapp.com/blogs",
      blogData,
      config
    );
    console.log("post request data", res);
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
    console.log("delete id", id);
    const res = await axios.delete(
      "https://blogsite-server.herokuapp.com/blogs/" + id
    );
    console.log("delete response", res);
    dispatch({
      type: DELETE_BLOG,
      payload: res.data.data,
    });
    navigate("/");
  } catch (error) {
    console.log("error is deleting blog", error.message);
  }
};

export const userLogin = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://blogsite-server.herokuapp.com/users/login",
      userData
    );
    console.log("res::::", res);
    const logintoken = localStorage.setItem("token", res.data.token);
    const userId = localStorage.setItem("userId", res.data.data._id);
    const username = localStorage.setItem("username", res.data.data.username);

    console.log(
      " login token in localstorage",
      logintoken,
      res.data.data.username
    );

    console.log("login request data", res);
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
