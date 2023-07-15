import Signin from "./signin";
import Login from "./login";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Staffregi from "./Staffregi";
import Main from "./Main";
import StaffLog from "./StaffLog";
import Quiz from "./Quiz";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import About from "./About";
import Work from "./Work";
import SelectTutor from "./SelecTutor";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Staffregi" element={<Staffregi/>}/>
        <Route path="/StaffLog" element={<StaffLog/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Testimonial" element={<Testimonial/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Select" element={<SelectTutor/>}/>


      </Routes>
    </Router>
    
    
  );
}
export default App;