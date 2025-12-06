import React from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import MainNav from "./layouts/MainNav";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Errorpage from "./pages/Errorpage";
import Logout from "./pages/Logout";
import ProtectedRoute from "./proutes/ProtectedRoute";
import PublicRoute from "./proutes/PublicRoute";
import Jobviewer from "./pages/Jobviewer";
function App() {
  return (
    <>
      {/* start nav */}
      <MainNav />
      {/* end nav */}
      {/* start routes */}
      <Routes>
        <Route path="*" element={<Errorpage />} /> 
        <Route path="/" element={<Home />} /> {/* in nav bar */}
        <Route path="/about" element={<About />} /> {/* in nav bar */}
        <Route path="/signin" element={<PublicRoute> <SignIn /> </PublicRoute>} /> {/* in About */}
        <Route path="/signup" element={<PublicRoute> <Signup /> </PublicRoute>} /> {/* in About */}
        <Route path="/logout" element={<ProtectedRoute> <Logout /> </ProtectedRoute> } /> {/* in nav bar */}
        <Route path="/jobviewer" element={<ProtectedRoute> <Jobviewer /> </ProtectedRoute> } /> {/* in nav bar */}
      </Routes>
      {/* end routes */}
    </>
  );
}

export default App;
