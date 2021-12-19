import React from 'react';
import style from './index.less';
// import TypeChooseItem from '@/components/TypeChoose/TypeChooseItem';
import { useWorkContext } from '@/context/WorkContainer';

interface ITypeChooseProps {
  itemList: {
    orderingKey: AnimeOrderingKey;
    ascending: boolean;
    name: string;
  }[];
}

const TypeChoose: React.FC<ITypeChooseProps> = (props) => {
  const workContext = useWorkContext();
  const { itemList } = props;

  const handleChooseIdChange = (orderingKey: AnimeOrderingKey, ascending: boolean) => {
    workContext.setOrderingKey(orderingKey);
    workContext.setAscending(ascending);
  };

  return (
    <div id={style.container}>
      {itemList.map((item, index) => {
        return (
          <div
            className={
              item.orderingKey === workContext.orderingKey && item.ascending === workContext.ascending
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
