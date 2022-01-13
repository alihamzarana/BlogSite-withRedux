import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/actions/blogActions";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log("blog data", blog);
    dispatch(addBlog(blog, navigate));
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          value={body}
          name="body"
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option selected>Select an author</option>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
