import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import style from './index.less';
import NoData from '@/components/NoData';

interface IMapProps {
  places: IPlaceInfoBrief[];
}

const Map: React.FC<IMapProps> = ({ places }) => {
  if (places.length === 0) {
    return (
      <NoData
        img="https://github.com/Saltro/nano/blob/dev_details/src/assets/images/map.png?raw=true"
        text="暂无数据"
      />
    );
  }
  return (
    <div className={style.container}>
      <MapContainer
        center={[places[0].latitude, places[0].longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className={style.mapContainer}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {places.map((place, index) => {
          return (
            <Marker position={[place.latitude, place.longitude]} key={index}>
              <Popup>{place.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
