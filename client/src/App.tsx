import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/employee/add" element={<h1>Add</h1>} />
          <Route path="/employee/edit" element={<h1>Edit</h1>} />
          <Route path="/employee" element={<h1>Employee</h1>} />
          <Route path="/status" element={<h1>Status</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Layout>
  );
};

export default App;
