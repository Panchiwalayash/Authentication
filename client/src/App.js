import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';


function App() {
  const token=localStorage.getItem('token')
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={token ?<Home/>:<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
