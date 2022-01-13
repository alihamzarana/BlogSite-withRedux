import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/actions/blogActions";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   console.log("new blogs", newBlogs);
  //   setBlogs(newBlogs);
  // };
  // const {
  //   error,
  //   isPending,
  //   data: blogs,
  // } = useFetch("http://localhost:8000/blogs");

  const dispatch = useDispatch();
  let blogs = useSelector((state) => state.blogReducer.blogs);
  console.log(("all blogs", blogs));

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);



  return (
    <div className="home">
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>} */}
      {blogs && <BlogList title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario Blogs"
      /> */}
    </div>
  );
};

export default Home;
