import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../redux/actions/blogActions";

const BlogList = () => {
  const allBlogs = useSelector((state) => state.blogReducer.blogs);
  console.log("bloglist component from reducer ", allBlogs);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i + 1);
  console.log("pages are:::", pages);

  useEffect(() => {
    dispatch(getAllBlogs(pageNumber));
  }, [pageNumber]);
  useEffect(() => {
    if (allBlogs) {
      setNumberOfPages(allBlogs.totalPages);
    }
  }, [allBlogs]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(pageNumber + 1));
    // setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="blog-lists">
      {/* <h3>page of - {pageNumber}</h3> */}
      {allBlogs &&
        allBlogs?.data?.map((blog, index) => (
          <div className="blog-preview" key={index}>
            <Link to={`/blogs/${blog._id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.userId?.username}</p>
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
