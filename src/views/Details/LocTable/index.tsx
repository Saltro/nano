import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.less';
import NoData from '@/components/NoData';

interface ILocTableProps {
  places: IPlaceInfoBrief[];
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
                <td>{place.latitude + ', ' + place.longitude}</td>
                <td>
                  <Link to={`/places/${place.id}`}>
                    <span className={style.link}>详情</span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LocTable;
