// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
