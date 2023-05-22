import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import LoginReg from "./components/LoginReg";
import Cookie from './components/Cookie';
import UserInfo from "./components/UserInfo";
import './App.css'
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
       <NavBar/>
        <Routes>
          <Route path="/test" element={<Cookie />} />
          <Route path="/loginreg" element={<LoginReg />} />
          <Route path="/userInfo" element={<UserInfo />} />    
        </Routes>
    </div>
  );
}

export default App;
