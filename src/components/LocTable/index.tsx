import React from 'react';
import { Link } from 'react-router-dom';
import NoData from '@/components/NoData';
import style from './index.less';

interface ILocTableProps {
  places: {
    id: number;
    name: string;
    city?: string;
    address: string;
    latitude?: number;
    longitude?: number;
  }[];
  heads: string[];
}

const LocTable: React.FC<ILocTableProps> = ({ places, heads }) => {
  if (places.length === 0) {
    return <NoData />;
  }
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr className={style.head}>
            {heads.map((head, index) => {
              return <th key={index}>{head}</th>;
            })}
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => {
            return (
              <tr key={index}>
                <td>{place.name}</td>
                <td>{place.address}</td>
                {!place.latitude && <td>{place.city}</td>}
                {place.latitude && place.longitude && (
                  <td>{place.latitude.toFixed(3) + ', ' + place.longitude.toFixed(3)}</td>
                )}
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
