import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer, Zoom } from "react-toastify";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
      <ToastContainer
        draggable={false}
        position={toast.POSITION.TOP_CENTER}
        transition={Zoom}
        autoClose={6000}
      />
    </Router>
  );
}

export default App;
