
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { L, Icon, divIcon } from 'leaflet';


const Map = () => {
  
  const customIcon = new Icon ({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
  });

  const position = [59.3293, 18.0686];

  return (
    <MapContainer center={[59.3293, 18.0686]} zoom={13} position={position}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={customIcon} position={position}>
            <Popup>My popup!<br/>yes my popup!</Popup>
        </Marker>
    </MapContainer>
  );
};

export default Map;
