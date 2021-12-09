import React, { useState } from 'react';
import style from './index.less';
import TypeChooseItem from '@/components/TypeChoose/TypeChooseItem';
import { useWorkContext } from '@/context/WorkContainer';

interface IProps {
  itemList: {
    id: number;
    name: string;
  }[];
}

const TypeChoose: React.FC<IProps> = (props) => {
  const workContext = useWorkContext();
  const { itemList } = props;

  const [chooseId, setChooseId] = useState(workContext.typeId);

  const handleChooseIdChange = (id: number) => {
    setChooseId(id);
    workContext.setTypeId(id);
  };

  return (
    <div id={style.container}>
      {itemList.map((item) => {
        return (
          <div
            className={item.id === chooseId ? style.typeChooseItemChosen : style.typeChooseItem}
            key={item.id}
            onClick={() => handleChooseIdChange(item.id)}
          >
            <TypeChooseItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default TypeChoose;
