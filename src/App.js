import Login from "./components/login"
import Signup from "./components/signup"
import Forgot from "./components/forgot"
import {Route,Routes} from 'react-router-dom'
function App() {
 return (
  <Routes>
  <Route path="/" element={<Signup/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/forgot" element={<Forgot/>}/>
</Routes>
  );
}

export default App;