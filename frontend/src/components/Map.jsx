import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { FeedMessage } from '../gtfs-realtime.browser-proto';
import * as utils from '../utils';
import Pbf from 'pbf';

// const { BaseLayer, Overlay } = LayersControl;

const Map = () => {

  const fetchGtfsData = async () => {
    const url = 'https://opendata.samtrafiken.se/gtfs-rt/sl/VehiclePositions.pb?key=b0144dba80b646d4b19469dd5430d3d9'; 
  
  
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const buffer = await response.arrayBuffer();
      const pbf = new Pbf(new Uint8Array(buffer))
      const gtfsData = FeedMessage.read(pbf);
  
      // Process the GTFS Realtime data as needed
      // For example, you can access the entities like this:
      const entities = gtfsData.entity;
      console.log(entities);
    } catch (error) {
      console.error('Error fetching GTFS Realtime data:', error);
    }
  };
  
  useEffect(() => {
    fetchGtfsData();
  }, []);

  return (
    <MapContainer>
      {/* <LayersControl position="topright">
        <BaseLayer checked name="Light Map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <Overlay checked name="Train" ref={layer_train}>
          <LayersControl.Overlay checked name="Metro" ref={layer_metro}>
            <LayersControl.Overlay checked name="Bus" ref={layer_bus}>
              <LayersControl.Overlay checked name="Tram" ref={layer_tram}>
                <LayersControl.Overlay checked name="Vessel" ref={layer_vessel}>
                  <LayersControl.Overlay checked name="Unknown" ref={layer_unknown} />
                </LayersControl.Overlay>
              </LayersControl.Overlay>
            </LayersControl.Overlay>
          </LayersControl.Overlay>
        </Overlay>
      </LayersControl> */}
    </MapContainer>
  );
};

export default Map;

// import 'leaflet/dist/leaflet.css';
// import { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { L, Icon, divIcon } from 'leaflet';

// const Map = () => {
  
//   const customIcon = new Icon ({
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     iconSize: [25, 41],
//   });

//   const position = [59.3293, 18.0686];

//   return (
//     <MapContainer center={[59.3293, 18.0686]} zoom={13} position={position}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker icon={customIcon} position={position}>
//             <Popup>My popup!<br/>yes my popup!</Popup>
//         </Marker>
//     </MapContainer>
//   );
// };

// export default Map;
