import './index.css';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import useScrollDirection from './utils/useScrollDirection';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Gallery from './components/Gallery';
import Landing from './components/Landing';

// import {} 
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  )
}

export default App
