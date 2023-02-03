import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Scroll from "./components/Scroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen my-0 min-h-screen bg-dark">
      <div className="w-full">
        <div className="w-4/5 max-w-7xl my-0 mx-auto">
          <Header />
        </div>
      </div>
      <div className="w-full">
        <div className="w-4/5 max-w-7xl my-0 mx-auto">
          <Hero />
          <Scroll />
        </div>
      </div>
      <div className="w-full bg-green-900">
        <div className="w-4/5 max-w-7xl my-0 mx-auto">
          <About />
        </div>
      </div>
      <div className="w-full">
        <div className="w-4/5 max-w-7xl my-0 mx-auto">
          <Projects />
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="w-4/5 max-w-7xl my-0 mx-auto">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
