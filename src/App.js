import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Mailer from './components/Mailer';
// import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forget" element={<Mailer/>} />
      {/* <Route path="/forget" element={<ForgetPassword/>} /> */}
      <Route path="/otp" element={<NewSubmit/>} />
    </Routes>
  </Router>
}

export default App;
