import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../redux/actions/blogActions";

const BlogList = () => {
  // const allBlogs = useSelector((state) => state.blogReducer.blogs);
  // console.log("bloglist component from reducer ", allBlogs);
  // const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i + 1);
  console.log("pages are:::", pages);

  useEffect(() => {
    // dispatch(getAllBlogs());
    fetch(`http://localhost:4000/blogs?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, data }) => {
        setBlogs(data);
        setNumberOfPages(totalPages);
        // setPageNumber(currentPage)
      });
    // setBlogs(allBlogs.data);
    // setNumberOfPages(allBlogs.totalPages);
  }, [pageNumber]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/blogs?page=${pageNumber}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setBlogs(res.data);
  //       console.log("res ::::", res);
  //       setNumberOfPages(res.totalPages);
  //     });
  // }, [pageNumber]);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(pageNumber + 1));
    // setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  return (
    <div className="blog-lists">
      <h3>page of - {pageNumber}</h3>
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
      {/* <Paginate /> */}

      <button onClick={gotoPrevious} disabled={pageNumber === 1}>
        Previous
      </button>
      {pages.map((pageIndex) => (
        <button
          key={pageIndex}
          onClick={() => setPageNumber(pageIndex)}
          className={pageNumber === pageIndex ? "active" : ""}
        >
          {pageIndex}
        </button>
      ))}
      <button onClick={gotoNext} disabled={pageNumber === numberOfPages}>
        Next
      </button>
    </div>
  );
};

export default BlogList;
