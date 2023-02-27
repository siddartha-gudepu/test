import "./App.css";
import Home from "./pages/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import College from "./pages/College/College";
import Coding from "./pages/Coding/Coding";
import Events from "./pages/Events/Events";
import Profile from "./pages/Profile/Profile";
import Hostel from "./pages/Hostel/Hostel";
function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home/>} />
          <Route path="college" element={<College/>}/>
          <Route path="coding" element={<Coding/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="hostel" element={<Hostel/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}
export default App;
