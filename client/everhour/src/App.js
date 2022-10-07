import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing/Pricing';
import Asana from './integrations/Asana';
import ClickUp from './integrations/ClickUp';
import BaseCamp from './integrations/BaseCamp';
import Trello from './integrations/Trello';
import Time from './pages/Project/Times';
import Demo from './pages/Home/Demo';
import Times from './pages/Project/Times';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Confirmmail from './pages/Confirmmail';
import Details from './pages/Project/Details';
import Details2 from './pages/Project/Details2';

function App() {
  let token=localStorage.getItem("token")
  return (
    <div className="App">
     {/* <Time/> */}
      {!token&&<Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/confirm" element={<Confirmmail/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/details2" element={<Details2/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/integrations/asana' element={<Asana/>}/>
        <Route path='/integrations/clickup' element={<ClickUp/>}/>
        <Route path='/integrations/basecamp' element={<BaseCamp/>}/>
        <Route path='/integrations/trello' element={<Trello/>}/>
        <Route path='/project' element={<Time/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;