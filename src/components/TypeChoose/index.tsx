import React, { useState } from 'react';
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

  const [chooseId, setChooseId] = useState(1);

  return (
    <div id={style.container}>
      {itemList.map((item) => {
        return (
          <div className={item.id === chooseId ? style.typeChooseItemChosen : style.typeChooseItem} key={item.id}
               onClick={() => setChooseId(item.id)}>
            <TypeChooseItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default TypeChoose;
