import React from 'react';
import style from './index.less';

interface ITag {
  item: {
    id: number;
    name: string;
  }[];
}

const Tag: React.FC<ITag> = (props) => {
  return (
    <div id={style.container}>
      {props.item.map((item) => {
        return (
          <div key={item.id} className={style.tagItem}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
