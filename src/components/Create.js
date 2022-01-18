import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/actions/blogActions";

const Create = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const [blog, setBlog] = useState({
    title: "",
    body: "",
    author: userName,
    userId,
  });

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = blog;
    console.log("blog data", data);
    dispatch(addBlog(data, token, navigate));
  };
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          name="title"
          required
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          value={blog.dispatchbody}
          name="body"
          onChange={(e) => setBlog({ ...blog, body: e.target.value })}
          required
        ></textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
