import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Works from "./pages/Works";
import Contacts from "./pages/Contacts";
import NavigationFooter from "./components/navigation/NavigationFooter";
import Login from "./pages/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleFormSubmit = (nameValue) => {
    //alteras os estados
    setIsLogged(true);
    setIsFormSubmitted(true);
    setName(nameValue);
  };

  if (!isFormSubmitted) {
    return <Login handleFormSubmit={handleFormSubmit} />;
  } else {
    return (
      <>
        <BrowserRouter>
          <Home name={name} />
          <NavigationBar />
          <Routes>
            <Route path="/" Component={Skills} exact />
            <Route path="/about" Component={About} exact />
            <Route path="/about/works" Component={Works} exact />
            <Route path="/works" Component={Works} exact />
            <Route path="/contact" Component={Contacts} exact />
          </Routes>
        </BrowserRouter>
        <NavigationFooter />
      </>
    );
  }
}

export default App;
