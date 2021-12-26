import React, { useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { message, Image } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import Request from '@/request';
import type { Popup as PopupType } from 'leaflet';
import style from './index.less';

interface ICustomMarkerProps {
  place: IPlaceInfoBrief & { openPopup?: boolean };
}

const CustomMarker: React.FC<ICustomMarkerProps> = ({ place }) => {
  const [isCollected, setIsCollected] = useState(place.isCollected);
  const popup = useRef<PopupType | null>(null);

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

  return (
    <Marker position={[place.latitude, place.longitude]}>
      <Popup minWidth={150} ref={popup} onOpen={() => {}}>
        <span className={style.popupText}>{place.name}</span>
        <button className={style.like} onClick={() => toggleCollected()}>
          {isCollected ? (
            <StarFilled style={{ color: '#f09199', fontSize: '17px' }} />
          ) : (
            <StarOutlined style={{ color: '#f09199', fontSize: '17px' }} />
          )}
        </button>
        {place.photos.length > 0 && (
          <Image src={place.photos[0].image} alt={place.photos[0].name} className={style.popupImg} />
        )}
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
