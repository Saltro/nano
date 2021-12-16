import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import style from './index.less';

interface IMapProps {
  places: PlaceInfoBrief[];
}

const Map: React.FC<IMapProps> = ({ places }) => {
  console.log(places)
  return (
    <div className={style.container}>
      <MapContainer
        center={[places[0].latitude, places[0].longtitude]}
        zoom={14}
        scrollWheelZoom={false}
        className={style.mapContainer}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {places.map((place, index) => {
          return (
            <Marker position={[place.latitude, place.longtitude]} key={index}>
              <Popup>{place.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
