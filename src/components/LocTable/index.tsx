import React from 'react';
import style from './index.less';
import NoData from '@/components/NoData';

interface ILocTableProps {
  places: {
    id: number;
    name: string;
    city?: string;
    address: string;
    latitude?: number;
    longitude?: number;
  }[];
}

const LocTable: React.FC<ILocTableProps> = ({ places }) => {
  if (places.length === 0) {
    return (
      <NoData
        img="https://github.com/Saltro/nano/blob/dev_details/src/assets/images/loc.png?raw=true"
        text="暂无数据"
      />
    );
  }
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr className={style.head}>
            <th>场景名称</th>
            <th>详细地址</th>
            <th>坐标位置</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => {
            return (
              <tr key={index}>
                <td>{place.name}</td>
                <td>{place.address}</td>
                {place.city && <td>{place.city}</td>}
                {place.latitude && place.longitude && <td>{place.latitude + ', ' + place.longitude}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LocTable;
