
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import NavbarMenu from './components/Navbar/NavbarMenu';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Explore from "./components/Explore/Explore";
import LibraryF from "./components/LibraryF/Library";
import Search from "./components/Search/Search";


function App() {
  return (
    <div className="App">
    <Router>
        
          <NavbarMenu />
          <Route path="/" exact component={Explore} /> 
          <Route path="/explore" exact component={Explore} /> 
          <Route path="/search" exact component={Search} /> 
          <Route path="/library" exact component={LibraryF} /> 
          
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
     
      </Router>
    </div>
  );
}


export default App;
