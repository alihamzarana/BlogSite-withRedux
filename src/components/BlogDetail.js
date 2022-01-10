import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const handleDelete = async () => {
    const data = await axios.delete("http://localhost:8000/blogs/" + id);
    console.log("deleted blog", data);
    navigate("/");
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
