import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Paginate = () => {
  // const [blogs, setBlogs] = useState("");
  // useEffect(() => {
  //   // const blogs = async () => {
  //   //   const res = await axios.get(`http://localhost:4000/blogs?page=1&limit=4`);
  //   //   console.log("blogs data", res);
  //   //   setBlogs(res.data);
  //   // };
  //   // blogs();
  //   fetch(`http://localhost:4000/blogs?page=1&limit=4`)
  //     .then((res) => res.json())
  //     .then((res) => {setBlogs(res.data)});
  // }, []);
  // console.log("blogs in paginate component", blogs);
  return (
    <div className="blog-lists">
      {/* {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Paginate;
