import React from "react";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
