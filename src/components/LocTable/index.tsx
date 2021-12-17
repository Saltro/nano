import React from 'react';
import style from './index.less';

interface ILocTableProps {
  places: PlaceInfoBrief[];
}

const LocTable: React.FC<ILocTableProps> = ({ places }) => {
  if(places[0].latitude===0){
    return <div/>
  }
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
          {places.map((place, index) => {
            return (
              <tr key={index}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.address}</td>
                <td>{place.latitude + ', ' + place.longtitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LocTable;
