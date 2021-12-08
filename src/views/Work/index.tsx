import React from "react";
import TypeChoose from "@/components/TypeChoose";

const Work: React.FC = () => {

  const itemList = [  // 分类筛选数据
    {id: 1, name: "全部作品",},
    {id: 2, name: "热门作品",},
    {id: 3, name: "当季新番",},
    {id: 4, name: "动画电影",},
    {id: 5, name: "轻小说/游戏衍生",},
  ]

  return (
    <div>
      <TypeChoose itemList={itemList} />
    </div>
  );
};


export default Work;
