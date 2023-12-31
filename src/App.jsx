
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import ForgetPassword from './pages/ForgetPassword';
import Offers from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
function App() {
  

  return (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/forget-password" element={<ForgetPassword />} /> 
          <Route path="/offers" element={<Offers />} /> 
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
