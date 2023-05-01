import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  return (
    <MapContainer center={[ 59.3265, 18.0644]} zoom={13}>
      <p>SL - Map</p>
      <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}

export default App;
