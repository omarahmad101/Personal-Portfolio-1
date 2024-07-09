import Navbar from "./Components/Navbar/navbar"; // Change! Capitalized Navbar
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Work";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  >
      <Navbar /> {/* Change! Capitalized Navbar */}
      <Intro />
     <Services /> 
     <Experience />
     <Works />
    </div>
  );
}

export default App;
