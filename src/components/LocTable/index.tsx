import React from 'react';
import style from './index.less';

interface locData {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longtitude: number;
}

const TypeChoose: React.FC = () => {
  const locsData: locData[] = [
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 2,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 3,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
  ];
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr className={style.head}>
            <th>地点ID</th>
            <th>场景名称</th>
            <th>详细地址</th>
            <th>坐标位置</th>
          </tr>
        </thead>
        <tbody>
          {locsData.map((loc, index) => {
            return (
              <tr key={index}>
                <td>{loc.id}</td>
                <td>{loc.name}</td>
                <td>{loc.address}</td>
                <td>{loc.latitude + ', ' + loc.longtitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TypeChoose;
