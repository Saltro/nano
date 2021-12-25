import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import style from './index.less';
import NoData from '@/components/NoData';
import { Image } from 'antd';

interface IMapProps {
  places: IPlaceInfoBrief[];
  styles: {
    height: string;
  };
  zoom: number;
  center?: [number, number];
}

const Map: React.FC<IMapProps> = ({ places, styles, zoom, center }) => {
  if (places.length === 0) {
    return (
      <NoData
        img="https://github.com/Saltro/nano/blob/dev_details/src/assets/images/map.png?raw=true"
        text="暂无数据"
      />
    );
  }

  return (
    <div className={style.container} style={styles}>
      <MapContainer
        center={center || [places[0].latitude, places[0].longitude]}
        zoom={zoom}
        scrollWheelZoom={true}
        style={style}
        className={style.mapContainer}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map((place, index) => {
          return (
            <Marker position={[place.latitude, place.longitude]} key={index}>
              <Popup minWidth={150}>
                <p className={style.popupText}>{place.name}</p>
                {place.photos.length > 0 && (
                  <Image src={place.photos[0].image} alt={place.photos[0].name} className={style.popupImg} />
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
