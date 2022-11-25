import Adds from "./components/addstudent"
import Adda from "./components/addsattendance"
import {Route,Routes} from 'react-router-dom'
function App() {
 return (
  <Routes>
  <Route path="/" element={<Adds/>}/>
  <Route path="/addAt" element={<Adda/>}/>
  <Route path="/addAs" element={<Adds/>}/>
</Routes>
  );
}

export default App;