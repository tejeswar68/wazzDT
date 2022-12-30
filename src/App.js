import Admin from "./components/admin"
import Login from "./components/login"
import Home from "./components/home"
import Student from "./components/student"
import {Route,Routes} from 'react-router-dom'
import SignUp from "./components/SignUp"


function App() {
 return (
  <Routes>
  <Route path="admin" element={<Admin/>}/>
  <Route path="student" element={<Student/>}/>
  <Route path="/" element={<Login/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="order" element={<Home/>}/>
  <Route path="signup" element={<SignUp/>}/>
</Routes>
  );
}

export default App;