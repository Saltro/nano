import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import React, { CSSProperties } from 'react';
import CustomMarker from './CustomMarker';
import style from './index.less';

interface IMapProps {
  places: (IPlaceInfoBrief & { openPopup?: boolean })[];
  styles?: CSSProperties;
  zoom: number;
  center?: [number, number];
}

interface IZoomProps {
  zoom: number;
}

const Zoom: React.FC<IZoomProps> = ({ zoom }) => {
  const map = useMap();
  map.setZoom(zoom);
  return <div />;
};

const Map: React.FC<IMapProps> = ({ places, styles, zoom, center }) => {
  return (
    <div className={style.container} style={styles}>
      <MapContainer
        center={center ?? [places[0].latitude, places[0].longitude]}
        zoom={zoom}
        scrollWheelZoom={true}
        className={style.mapContainer}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Zoom zoom={zoom} />
        {places.map((place, index) => {
          return <CustomMarker key={index} place={place} />;
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
