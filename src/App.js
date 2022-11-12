import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { AppWrapper, SectionsWrapper } from "./AppStyle";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <SectionsWrapper>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </SectionsWrapper>
    </AppWrapper>
  );
}

export default App;
