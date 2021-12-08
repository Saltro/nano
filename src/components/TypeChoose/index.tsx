import React from 'react';
import style from './index.less';
import TypeChooseItem from '@/components/TypeChoose/TypeChooseItem';

interface IProps {
  itemList: {
    id: number;
    name: string;
  }[];
}

const TypeChoose: React.FC<IProps> = (props) => {
  const { itemList } = props;

  let chooseId = 1;

  return (
    <div id={style.container}>
      {itemList.map((item) => {
        return (
          <div className={item.id === chooseId ? style.typeChooseItemChosen : style.typeChooseItem} key={item.id}>
            <TypeChooseItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default TypeChoose;
