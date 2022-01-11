import {
  CREATE_BLOG,
  UPDATE_BLOG,
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  SET_IS_FETCHING,
} from "../constants/index";

const initialState = {
  blogs: [],
  blog: {},
};

const blogReducer = (state = initialState, action) => {
      console.log("blod data", action.payload);
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: action.payload,

      };
    default:
      return state;
  }
};

export default blogReducer;
