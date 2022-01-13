import {
  CREATE_BLOG,
  UPDATE_BLOG,
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  GET_SINGLE_BLOG_ITEM,
  USER_LOGIN,
  // SET_IS_FETCHING,
  DELETE_BLOG,
} from "../constants/index";

const initialState = {
  blogs: [],
  blog: {},
  users: [],
  user: {},
};

const blogReducer = (state = initialState, action) => {
  console.log("action in reducer", action.payload);
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };

    case GET_SINGLE_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case CREATE_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case DELETE_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case GET_SINGLE_BLOG_ITEM:
      return {
        ...state,
        blog: action.payload,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
