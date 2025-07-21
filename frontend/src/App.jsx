import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar, Home, About, Journey, Achievements, Skills, Project, Contact } from './components';
import PortfolioState from './context/portfolioState';

function App() {
  return (
    <PortfolioState>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Journey/>
        <Achievements/>
        <Skills/>
        <Project/>
        <Contact/>
      </Router>
    </PortfolioState>
  );
}

export default App;
