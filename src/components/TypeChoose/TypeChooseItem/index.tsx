import React from "react";

interface IProps {
  id: number;
  name: string;
}

const TypeChooseItem: React.FC<IProps> = (props) => {
  return (
    <span className="type-choose-item">
      {props.name}
    </span>
  );
};

export default TypeChooseItem;
