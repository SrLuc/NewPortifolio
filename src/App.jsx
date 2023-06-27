import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contacts";
import NavigationFooter from "./components/navigation/NavigationFooter";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <NavigationBar />
      <Routes>
        <Route path="/" Component={Skills} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/works" Component={Works} exact />
        <Route path="/contact" Component={Contact} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
