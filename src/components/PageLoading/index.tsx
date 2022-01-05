import React from 'react';
import Loading from '@/components/Loading';

export default function PageLoading() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
    </div>
  );
}
