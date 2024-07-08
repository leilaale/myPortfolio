import logo from './logo.svg';
import './App.css';
import Header from './header';
import SideInfo from './side_info';
import AboutMe from './about';
import Projects from './projects';
import ContactMe from './contactMe';

function App() {


  return (
    <div className = "app_Main">
      <SideInfo></SideInfo>
      <div className= "main_Column">
        <Header></Header>
        <div className='info_scroll'>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <ContactMe></ContactMe>

        </div>
      </div>
    </div>
  );
}

export default App;
