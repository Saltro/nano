import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Request from '@/request';
import Map from '@/components/Map';
import HomeLayout from '@/layouts/HomeLayout';

const Places: React.FC<{}> = () => {
  const [place, setPlace] = useState<IPlaceInfoBrief[]>([]);
  const [centerIdx, setCenterIdx] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      Request.getPlace(id).then((res) => {
        const { data } = res;
        setPlace([
          {
            id: data.id,
            name: data.name,
            address: data.address,
            longitude: data.longitude,
            latitude: data.latitude,
            photos: data.photos,
          },
        ]);
      });
    } else {
      const PAGE = 1;
      const PAGE_SIZE = 200;
      Request.getPlacePage(PAGE, PAGE_SIZE).then((res) => {
        setCenterIdx(Math.floor(Math.random() * PAGE_SIZE));
        const { data } = res;
        setPlace(
          data.results.map((item) => ({
            id: item.id,
            name: item.name,
            address: item.address,
            longitude: item.longitude,
            latitude: item.latitude,
            photos: item.photos,
          })),
        );
      });
    }
  }, []);

  return (
    <HomeLayout>
      <div>
        <Map
          places={place}
          styles={{ height: '90vh' }}
          zoom={17}
          center={place.length === 0 ? [35.69, 135.69] : [place[centerIdx].latitude, place[centerIdx].longitude]}
        />
      </div>
    </HomeLayout>
  );
};

export default Places;
