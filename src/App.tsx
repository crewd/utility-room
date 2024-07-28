import React from "react";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>123</Layout>}>
          메인페이지
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
