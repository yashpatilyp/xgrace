
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Header from './components/Header'
import Footer from './components/Footer'
import About2 from './components/About2';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
     
        <Header/>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About2 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      
   
    
    </div>
  );
}

export default App;
