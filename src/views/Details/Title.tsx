import React from 'react';
import style from './index.less';

interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = (props) => {
  return (
    <div className={style.title}>
      <span>{props.text}</span>
    </div>
  );
};

export default Title;
