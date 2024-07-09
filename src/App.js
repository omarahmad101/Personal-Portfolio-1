import Navbar from "./Components/Navbar/navbar"; // Change! Capitalized Navbar
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    className="App"
    style={{
      background: darkMode ? '#1e1e1e' : '#f7f7f7',
      color: darkMode ? "white" : "",
    }}
  >
      <Navbar /> {/* Change! Capitalized Navbar */}
      <Intro />
     <Services /> 
     <Experience />
     <Works />
     <Portfolio />
     <Testimonial />
     <Footer />
    </div>
  );
}

export default App;
