import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
