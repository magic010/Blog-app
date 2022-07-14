import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import { Context } from "./context/Context.js";
import Register from "./pages//register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import LogIn from "./pages/login/LogIn.jsx";
import Settings from "./pages/settings/Settings.jsx";
import SinglePage from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/login">{user ? <Home /> : <LogIn />}</Route>
      <Route path="/write">{user ? <Write /> : <Register />}</Route>
      <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
      <Route path="/post/:postId">
        <SinglePage />
      </Route>
    </Router>
  );
}

export default App;
