import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MapView from './pages/MapView';
import VehicleDetails from "./pages/VehicleDetails";


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/MapView" element={<MapView/>}/>
      <Route path="/VehicleDetails" element={<VehicleDetails/>}/>
    </Routes>
    </Router>
  );
}

export default App;
