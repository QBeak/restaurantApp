
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contacts/>}/>
          <Route path='/products' element={<Products/>}/>
      
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
