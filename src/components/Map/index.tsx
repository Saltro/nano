import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import style from './index.less';

interface pos {
  lat: number;
  lon: number;
  name: string;
}

const Map: React.FC = () => {
  const pos: pos[] = [
    { lat: 35.6856, lon: 139.702, name: '中' },
    { lat: 35.6906, lon: 139.702, name: '北' },
    { lat: 35.6856, lon: 139.712, name: '东' },
    { lat: 35.6856, lon: 139.692, name: '西' },
    { lat: 35.6806, lon: 139.702, name: '南' },
  ];
  return (
    <div className={style.container}>
      <MapContainer center={[pos[0].lat, pos[0].lon]} zoom={14} scrollWheelZoom={false} className={style.mapContainer}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pos.map((p, i) => {
          return (
            <Marker position={[p.lat, p.lon]} key={i}>
              <Popup>{p.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
