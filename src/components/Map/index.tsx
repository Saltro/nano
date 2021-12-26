import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import style from './index.less';
import NoData from '@/components/NoData';
import { Image, message } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons'
import request from '@/request';
import { AxiosResponse } from 'axios';

interface IMapProps {
  places: IPlaceInfoBrief[];
  styles: {
    height: string;
  };
  zoom: number;
  center?: [number, number];
}

const Map: React.FC<IMapProps> = ({ places, styles, zoom, center }) => {
  const [ placesArr, setPlaces ] = useState(places);

  const toggleCollected = (id: number, index: number) => {
    if(placesArr[index].isCollected){
      console.log(placesArr[index])
      request.deletePlaceCollection(id).then(() => {
        message.success("取消地点收藏成功");
        setPlaces(prev => {
          const a = [...prev]
          a[index].isCollected = false
          console.log(a[index])
          return a
        })
      })
      .catch(() => {
        message.error('请先登录')
      })
    }
    else {
      request.addPlaceCollection(id).then(() => {
        message.success("地点收藏成功");
        setPlaces(prev => {
          const a = [...prev]
          a[index].isCollected = true
          return a
        })
      })
      .catch(() => {
        message.error('请先登录')
      })
    }
  };

  useEffect(() => {
    const promiseList: Promise<AxiosResponse>[] = [];
    const arr = places
    places.forEach((place) => {
      promiseList.push(request.checkPlaceCollection(place.id))
    })
    Promise.all(promiseList).then((res) => {
      console.log('@')
      arr.forEach((place, index) => {
        place.isCollected = res[index].data.is_collected
      })
      setPlaces(arr)
    })
    .catch(() => {
      setPlaces(arr)
    })
  })

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
        {placesArr.map((place, index) => {
          return (
            <Marker position={[place.latitude, place.longitude]} key={index}>
              <Popup minWidth={150}>
                <span className={style.popupText}>{place.name}</span>
                <button 
                  className={style.like}
                  onClick={() => toggleCollected(place.id, index)}
                >
                  {place.isCollected ? <StarFilled style={{color:'#f09199', fontSize:'17px'}}/> : <StarOutlined style={{color:'#f09199', fontSize:'17px'}}/>}
                </button>
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
