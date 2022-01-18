import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleBlogItem, updateBlog } from "../redux/actions/blogActions";

const BLogUpdate = () => {
  const singleBlog = useSelector((state) => state.blogReducer.blog);
  // console.log("singleBlogItem", singleBlog);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");
  const [blog, setBlog] = useState({ title: "", body: "" });
  const { id } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlogItem(id));
    setBlog(singleBlog);
  }, []);

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setBlog({
  //     ...blog,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...blog };
    // console.log("data for update::", data);
    dispatch(updateBlog(id, data, navigate));
    // navigate("/")
  };
  return (
    <div className="create">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          // onChange={handleChange}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          value={blog.body}
          name="body"
          onChange={(e) => setBlog({ ...blog, body: e.target.value })}
          // onChange={handleChange}
          required
        ></textarea>

        <button>Update Blog</button>
      </form>
    </div>
  );
};

export default BLogUpdate;
