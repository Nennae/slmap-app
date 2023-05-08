import 'leaflet/dist/leaflet.css';
import { 
      MapContainer, 
      TileLayer, 
      useMap, 
      useMapEvents,
      Marker,
      Popup
} 
from 'react-leaflet';
// import { L, Icon, divIcon } from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = () => {
//       delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//       iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//       iconUrl: require("leaflet/dist/images/marker-icon.png"),
//       shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });
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
      const position = [59.3265, 18.0644]
      const trafiklab_api_key = "a2242a4330664e1ba8179c3cb677f9ff";

      // const createCustomClusterIcon = (cluster) => {
      //       return L.divIcon({
      //             html: `<span>${cluster.getChildCount()}</span>`,
      //             className: 'marker-cluster-custom',
      //             iconSize: L.point(40, 40, true),
      //       });
      // }

return (
      <MapContainer
      center={position} 
      zoom={13}
      scrollWheelZoom={true}
      >
            <p>SL-Map</p>
            <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <MarkerClusterGroup
      chunkedLoading
      iconCreateFunction={createCustomClusterIcon}
      >
      <Marker position={position}>
            <Popup>My popup!<br/>yes my popup!</Popup>
      </Marker>
      </MarkerClusterGroup> */}
      </MapContainer>
)
}

export default Map;