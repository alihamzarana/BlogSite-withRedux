import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/actions/blogActions";

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogReducer.blogs)
  console.log("blogs in blog list", blogs)

  useEffect(() => {
  dispatch(getAllBlogs())
    
  }, [])
  return (
    <div className="blog-lists">
      
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
