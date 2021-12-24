import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './index.less';

interface ITypeChooseProps {
  orderingKey: AnimeOrderingKey;
  ascending: boolean;
  itemList: {
    orderingKey: AnimeOrderingKey;
    ascending: boolean;
    name: string;
  }[];
}

const TypeChoose: React.FC<ITypeChooseProps> = (props) => {
  const { orderingKey, ascending, itemList } = props;
  const navigate = useNavigate();

  return (
    <div id={style.container}>
      {itemList.map((item, index) => {
        return (
          <div
            className={
              item.orderingKey === orderingKey && item.ascending === ascending
                ? style.typeChooseItemChosen
                : style.typeChooseItem
            }
            key={index}
            onClick={() => navigate(`/work/1/${item.orderingKey}/${item.ascending}`)}
          >
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TypeChoose;
