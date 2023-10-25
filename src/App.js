import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("Light");
 
  return (
    <div
      className="App"
      style={
        mode === "Light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <Navbar mode={mode} setMode={setMode} />
      <Home />
      <HorizontalBar/>
      <About mode={mode} />
      <HorizontalBar/>
      <Project/>
      <HorizontalBar/>
      <Contact mode={mode}/>
      <Footer/>
    </div>
  );
}

export default App;
