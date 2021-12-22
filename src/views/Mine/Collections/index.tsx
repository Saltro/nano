import React from 'react';
import Request from '@/request';

function Collections() {
  Request.getUserAnimeCollection().then((res) => {
    const { data } = res;
    console.log(data);
  });

  Request.getUserPlaceCollection().then((res) => {
    const { data } = res;
    console.log(data);
  });

  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
}

export default Collections;
