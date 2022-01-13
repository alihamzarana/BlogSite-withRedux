import Navbar from "./components/Navbar";
// import Home from "./components/Home";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 02273f3f0324f199345bfa8fc3ce3ec93275dc73
import Create from "./components/Create";
import React from "react";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";
import BlogList from "./components/BlogList";
<<<<<<< HEAD
import BLogUpdate from "./components/BLogUpdate";
import Register from "./components/Register";
import Login from "./components/Login";
=======
>>>>>>> 02273f3f0324f199345bfa8fc3ce3ec93275dc73

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="content">
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path={"/blogs/:id"} element={<BlogDetail />} />
            <Route path={"/"} element={<BlogList />} />
            <Route path={"/create"} element={<Create />} />
            <Route
              path={"/blogs/update-blog/:id"}
              element={<BLogUpdate />}
            ></Route>
          </Route>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
        </div>
=======
            <Routes>
              <Route exact path={"/"} element={<BlogList />} />
              <Route path={"/create"} element={<Create />} />
              <Route path={"/blogs/:id"} element={<BlogDetail />} />
              <Route path={"*"} element={<NotFound />}></Route>
            </Routes>
          </div>
>>>>>>> 02273f3f0324f199345bfa8fc3ce3ec93275dc73
        </div>
      </Router>
    </>
    // <div className="App">
    //   <Navbar />
    //   <div className="content">
    //     <Home />
    //   </div>
    // </div>
  );
}

export default App;
const PrivateRoutes = () => {
  const authLogin = localStorage.getItem("token");
  console.log("authLogin", authLogin);
  return authLogin ? (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />{" "}
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};
