import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Request from '@/request';
import Map from '@/components/Map';
import HomeLayout from '@/layouts/HomeLayout';
import Loading from '@/components/Loading';

const Places: React.FC<{}> = () => {
  const { id } = useParams();
  const [place, setPlace] = useState<(IPlaceInfoBrief & { openPopup?: boolean })[]>([]);
  const [centerIdx, setCenterIdx] = useState(0);
  const [zoom, setZoom] = useState(17);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    if (id !== '0') {
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
            isCollected: data.is_collected,
            city: data.city,
            openPopup: true,
          },
        ]);
        setIsLoading(false);
      });
    } else {
      const PAGE = 1;
      const PAGE_SIZE = 200;
      setZoom(6);
      Request.getPlacePage(PAGE, PAGE_SIZE).then((res) => {
        setPlace([]);
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
            city: item.city,
            isCollected: item.is_collected,
          })),
        );
        setIsLoading(false);
      });
    }
  }, [id]);

  return (
    <HomeLayout>
      <Loading isLoading={isLoading}>
        <Map
          places={place}
          styles={{ height: '100%', margin: 0 }}
          zoom={zoom}
          center={place.length === 0 ? [35.69, 135.69] : [place[centerIdx].latitude, place[centerIdx].longitude]}
        />
      </Loading>
    </HomeLayout>
  );
};

export default Places;
