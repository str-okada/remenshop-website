import './App.css';
import About from './components/About';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <footer>
          Copyright © 2023 Ramen Shop <strong>Gmen</strong>
        </footer>

      </div>
    </Router>
  );
}

export default App;
