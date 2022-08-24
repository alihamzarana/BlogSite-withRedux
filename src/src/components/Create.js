import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/actions/blogActions";

const Create = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [preview, setPreview] = useState();
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    author: userName,
    image: "",
    userId,
  });

  useEffect(() => {
    if (!blog.image) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(blog.image);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [blog.image]);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("body", blog.body);
    formData.append("author", blog.author);
    formData.append("image", blog.image);
    formData.append("userId", userId);
    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }
    
    dispatch(addBlog(formData, token, navigate));
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
        <label>Add image</label>
        <div>
          <input
            type="file"
            name="image"
            accept="image/jpg,image/jpeg, image/png,"
            onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })}
          />

          {blog.image && (
            <img
              src={preview}
              alt=""
              style={{ height: "150px", width: "150px" }}
            />
          )}
        </div>
        <label>Blog Body:</label>
        <textarea
          type="text"
          value={blog.body}
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
