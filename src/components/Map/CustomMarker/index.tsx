import React, { useEffect, useRef, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { message, Image } from 'antd';
import { StarOutlined, StarFilled, AimOutlined } from '@ant-design/icons';
import Request from '@/request';
import type { Marker as MarkerType, Popup as PopupType } from 'leaflet';
import style from './index.less';
import { useImagesLoaded } from 'use-images-loaded';
import Skeleton from 'react-loading-skeleton';

interface ICustomMarkerProps {
  place: IPlaceInfoBrief & { openPopup?: boolean };
}

const CustomMarker: React.FC<ICustomMarkerProps> = ({ place }) => {
  const [isCollected, setIsCollected] = useState(place.isCollected);
  const [refImages, loadedImage] = useImagesLoaded();
  const popup = useRef<PopupType | null>(null);
  const marker = useRef<MarkerType | null>(null);
  const map = useMap();

  useEffect(() => {
    if (marker?.current && place.openPopup) {
      marker.current.openPopup();
    }
  }, []);

  const toggleCollected = () => {
    if (isCollected) {
      Request.deletePlaceCollection(place.id)
        .then(() => {
          message.success('取消地点收藏成功');
          setIsCollected(false);
        })
        .catch(() => {
          message.error('请先登录');
        });
    } else {
      Request.addPlaceCollection(place.id)
        .then(() => {
          message.success('地点收藏成功');
          setIsCollected(true);
        })
        .catch(() => {
          message.error('请先登录');
        });
    }
  };

  const focus = () => {
    map.setView([place.latitude, place.longitude], 17);
    marker.current?.openPopup();
  };

  return (
    <Marker position={[place.latitude, place.longitude]} ref={marker}>
      <Popup minWidth={150} ref={popup}>
        {place.photos.length > 0 && (
          <div className={style.image} ref={refImages}>
            {!loadedImage && <Skeleton height="13.5vh" width="100%" />}
            <Image
              src={place.photos[0].image}
              alt={place.photos[0].name}
              className={style.popupImg}
              style={{ display: loadedImage ? 'block' : 'none' }}
            />
          </div>
        )}
        <span className={style.city}>{place.city}</span>
        <span className={style.name}>{place.name}</span>
        <div className={style.buttons}>
          {!place.openPopup && (
            <button className={style.like} onClick={focus}>
              <AimOutlined style={{ color: '#f09199', fontSize: '17px' }} />
            </button>
          )}
          <button className={style.like} onClick={() => toggleCollected()}>
            {isCollected ? (
              <StarFilled style={{ color: '#f09199', fontSize: '17px' }} />
            ) : (
              <StarOutlined style={{ color: '#f09199', fontSize: '17px' }} />
            )}
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
