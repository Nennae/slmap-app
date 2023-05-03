import 'leaflet/dist/leaflet.css';
import { 
      MapContainer, 
      TileLayer, 
      useMap, 
      useMapEvents
} 
from 'react-leaflet';

const Map = () => {
      // const map = useMap();
      // const mapEvent = useMapEvents({
      //       click: () => {
      //             map.locate()
      //       },
      //       locationfound: (location) => {
      //             console.log("location found:", location)
      //       },
      // })
      // init
const trafiklab_api_key = "a2242a4330664e1ba8179c3cb677f9ff";

return (
      <MapContainer
      center={[ 59.3265, 18.0644]} zoom={13}
      >
            <p>SL-Map</p>
            <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      </MapContainer>
)
}

export default Map;