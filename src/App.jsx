import React from "react";
import "./scss/app.scss";

import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const SearchContext = React.createContext("");

function App() {
  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={[]}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
