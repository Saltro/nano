import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './index.less';
import Request from '@/request';
import Map from '@/components/Map';
import HomeLayout from '@/layouts/HomeLayout';

const Places: React.FC<{}> = () => {
  const [place, setPlace] = useState<IPlaceInfoBrief>();
  const { id } = useParams();
  useEffect(() => {
    Request.getPlace(id).then((res) => {
      const { data } = res;
      setPlace({
        id: data.id,
        name: data.name,
        address: data.address,
        longitude: data.longitude,
        latitude: data.latitude,
        photos: data.photos,
      });
    });
  }, []);

  return (
    <HomeLayout>
      <div className={style.container}>
        <Map
          places={place ? [place] : []}
          styles={{ height: '90vh' }}
          zoom={17}
          center={place ? [place.latitude, place.longitude] : [35.69, 135.69]}
        />
      </div>
    </HomeLayout>
  );
};

export default Places;
