import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Create from "./components/Create";
import React from "react";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";
import BlogList from "./components/BlogList";
import BLogUpdate from "./components/BLogUpdate";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="content">
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
