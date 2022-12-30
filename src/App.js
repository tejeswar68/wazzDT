import Admin from "./components/admin"
import Login from "./components/login"
import Home from "./components/home"
import Student from "./components/student"
import {Route,Routes} from 'react-router-dom'
function App() {
 return (
  <Routes>
  <Route path="admin" element={<Admin/>}/>
  <Route path="student" element={<Student/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="login" element={<Login/>}/>
</Routes>
  );
}

export default App;