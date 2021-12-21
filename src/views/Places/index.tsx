import React, { useEffect, useState } from 'react';
import style from './index.less';
import Request from '@/request';
import Map from '@/components/Map';
import HomeLayout from '@/layouts/HomeLayout';

const Places: React.FC<{}> = () => {
  const [places, setPlaces] = useState<IPlaceInfoBrief[]>([]);
  useEffect(() => {
    Request.getPlaces().then((res) => {
      const { data } = res;
      setPlaces(
        data.results.map((place) => {
          return {
            id: place.id,
            name: place.name,
            address: place.address,
            longitude: place.longitude,
            latitude: place.latitude,
            photos: place.photos,
          };
        }),
      );
    });
  }, []);

  return (
    <HomeLayout>
      <div className={style.container}>
        <Map
          places={places}
          styles={{ height: '90vh' }}
          zoom={17}
          center={places.length > 0 ? [places[0].latitude, places[0].longitude] : [35.69, 135.69]}
        />
      </div>
    </HomeLayout>
  );
};

export default Places;
