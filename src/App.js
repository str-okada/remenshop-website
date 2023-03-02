import './App.css';
import About from './components/About';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
