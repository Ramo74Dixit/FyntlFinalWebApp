import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './page/Navbar';
import Home from './page/Home';
import Footer from './page/Footer';
import Adv1 from './page/Adv1';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/adv1" element={<Adv1 />} /> */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
