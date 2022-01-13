import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/actions/blogActions";
import { useSelector } from "react-redux";
import { getSingleBlog } from "../redux/actions/blogActions";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogReducer.blog);
  console.log("single blog", blog);

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, []);

  const handleDelete = () => {
    dispatch(deleteBlog(id, navigate));
  };
  const handleUpdate = () => {
    navigate(`/blogs/update-blog/${id}`);
  };
  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/blogs/update-blog/${blog._id}`}>
            <button onClick={handleUpdate}>Update</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
