import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleBlogItem, updateBlog } from "../redux/actions/blogActions";

const BLogUpdate = () => {
  const singleBlog = useSelector((state) => state.blogReducer.blog);
  const [blog, setBlog] = useState({ title: "", body: "", image: "" });
  const { id } = useParams();
  let navigate = useNavigate();
  const [preview, setPreview] = useState();

  const [selectedFile, setSelectedFile] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlogItem(id));
    setBlog(singleBlog);
  }, []);

  // useEffect(() => {
  //   if (blog.image) {
  //     setPreview(null);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(blog.image);
  //   console.log("image url", objectUrl);
  //   setSelectedFile(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [blog.image]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setBlog({ ...blog, image: undefined });
      return;
    }

    // setSelectedFile(e.target.files[0]);
    setBlog({ ...blog, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("body", blog.body);
    formData.append("image", blog.image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }
    dispatch(updateBlog(id, formData, navigate));
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
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
        <label>Update image</label>
        <div>
          <input
            type="file"
            name="image"
            accept="image/jpg,image/jpeg, image/png,"
            // onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })}
            onChange={onSelectFile}
          />
          {/* {blog.image ? (
            <img
              src={blog.image}
              alt=""
              style={{ height: "150px", width: "150px" }}
            />
          ) : (
            <img
              src={preview}
              alt=""
              style={{ height: "150px", width: "150px" }}
            />
          )} */}

          {blog.image && (
            <img
              src={blog.image}
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

        <button>Update Blog</button>
      </form>
    </div>
  );
};

export default BLogUpdate;
