import { Navbar } from "./components";
import { Home, Experience, About, Interest, Skills, Award } from "./sections";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const dataNav = [
    {
      name: "Home",
      link: "/",
      active: true
    },
    {
      name: "About",
      link: "/about",
      active: false
    },
    {
      name: "Experience",
      link: "/experience",
      active: false
    },
    {
      name: "Interest",
      link: "/interest",
      active: false
    },
    {
      name: "Skills",
      link: "/skills",
      active: false
    },
    {
      name: "Award",
      link: "/award",
      active: false
    }
  ]
  return (
    <div className="App container">
      
    <Router>
      <div>
        <Navbar data={dataNav}/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/interest">
            <Interest />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/award">
            <Award />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
