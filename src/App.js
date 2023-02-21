import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
