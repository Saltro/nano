import React from "react";
import TypeChooseItem from "@/components/TypeChoose/TypeChooseItem";

interface IProps {
  itemList: {
    id: number;
    name: string;
  }[];
}

const TypeChoose: React.FC<IProps> = (props) => {
  return (
    <div>
      {props.itemList.map((item) => {
        return <TypeChooseItem key={item.id} {...item} />;
      })}
    </div>
  )
};

export default TypeChoose;
