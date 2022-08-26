import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import SignUp from './pages/Login/SignUp';
import Login from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing/Pricing';
import LoginForm from './components/LoginForm';
import Asana from './integrations/Asana';
import ClickUp from './integrations/ClickUp';
import BaseCamp from './integrations/BaseCamp';
import Trello from './integrations/Trello';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/loginDetails' element={<LoginForm/>}/>
        <Route path='/integrations/asana' element={<Asana/>}/>
        <Route path='/integrations/clickup' element={<ClickUp/>}/>
        <Route path='/integrations/basecamp' element={<BaseCamp/>}/>
        <Route path='/integrations/trello' element={<Trello/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;