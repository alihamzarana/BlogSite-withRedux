import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import React from "react";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route path={"/create"} element={<Create />} />
              <Route path={"/blogs/:id"} element={<BlogDetail />} />
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
