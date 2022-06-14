import React from "react";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import "./App.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
