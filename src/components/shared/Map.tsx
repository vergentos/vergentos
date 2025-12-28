'use client';
import 'leaflet/dist/leaflet.css';
import { TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

// 12 Whiteladies Road, Clifton, Bristol BS8 1PD
const position: [number, number] = [51.4584, -2.6120];

const Map = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <>
      <MapContainer className="h-full w-full" center={position} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CircleMarker 
          center={position} 
          radius={12}
          pathOptions={{ 
            fillColor: '#27affb', 
            fillOpacity: 0.9,
            color: '#222222',
            weight: 3
          }}
        >
          <Popup>
            <strong>Mediatopia</strong><br />
            12 Whiteladies Road<br />
            Bristol BS8 1PD
          </Popup>
        </CircleMarker>
      </MapContainer>
    </>
  );
};

export default Map;
