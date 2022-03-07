import './App.css';
import './index.css';
import Introduction from './componenets/intro/introduction';
import About from './componenets/about/About';
import ProjectList from './componenets/ProjectList/ProjectList';
import Contact from './componenets/contact/contact';
import Toggle from './componenets/Toggle/toggle';
import { useContext } from "react"
import { ThemeContext } from "./context";


function App() {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "black": "white", color:darkMode && "white"}}>
      <Toggle />
      <Introduction />
      <About />
      <ProjectList />
      <Contact />
    </div>
       
  );
}

export default App;
