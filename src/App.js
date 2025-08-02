import "./App.css";
import Header from "./header";
import SideInfo from "./side_info";
import AboutMe from "./components/About/AboutMe";
import Projects from "./components/Projects/projects";
import ContactMe from "./contactMe";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Leila Martinez";
  }, []);

  return (
    <div className="app_Main">
      <SideInfo></SideInfo>
      <div className="main_Column">
        <Header></Header>
        <div className="info_scroll">
          <AboutMe></AboutMe>
          <Projects></Projects>
          <ContactMe></ContactMe>
        </div>
      </div>
    </div>
  );
}

export default App;
