import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Services from './page/Services';
import PricingPlans from './page/PricingPlans';
import Blogs from './page/Blogs';
import ReachUs from './page/ReachUs';
import CopilotIntro from './page/CopilotIntro'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/adv1" element={<Adv1 />} /> */}
          <Route path="/copilot-intro" element={<CopilotIntro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
