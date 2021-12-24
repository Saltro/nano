import React from 'react';
import style from './index.less';

interface ITypeChooseProps {
  orderingKey: AnimeOrderingKey;
  ascending: boolean;
  setOrderingKey: (orderingKey: AnimeOrderingKey) => void;
  setAscending: (ascending: boolean) => void;
  itemList: {
    orderingKey: AnimeOrderingKey;
    ascending: boolean;
    name: string;
  }[];
}

const TypeChoose: React.FC<ITypeChooseProps> = (props) => {
  const { orderingKey, ascending, setOrderingKey, setAscending, itemList } = props;

  const handleChooseIdChange = (orderingKey: AnimeOrderingKey, ascending: boolean) => {
    setOrderingKey(orderingKey);
    setAscending(ascending);
  };

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
            onClick={() => handleChooseIdChange(item.orderingKey, item.ascending)}
          >
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TypeChoose;
