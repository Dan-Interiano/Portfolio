import './App.css';
import './index.css';
import Introduction from './componenets/intro/introduction';
import About from './componenets/about/About';
import ProjectList from './componenets/ProjectList/ProjectList';
import Contact from './componenets/contact/contact';
import Toggle from './componenets/Toggle/toggle';


function App() {
  

  return (
    <div stlye={{backgroundColor: "red"}}>
      <Toggle />
      <Introduction />
      <About />
      <ProjectList />
      <Contact />
    </div>
       
  );
}

export default App;
