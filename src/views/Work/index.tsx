import React from "react";
import TypeChoose from "@/components/TypeChoose";
import HomeLayout from "@/layouts/HomeLayout";
import style from "@/views/Home/index.less";
import WorkTable from "@/components/WorkTable";

const workTableList = [
  {workId: 24, title_cn: "侧耳倾听", cover: "https://media.nano.nagico.cn/group1/M00/00/44/CgAABGGwe3KAUPRqAACmUZUO3nA965.jpg",},
  {workId: 25, title_cn: "言叶之庭", cover: "https://media.nano.nagico.cn/group1/M00/00/45/CgAABGGwe7SAcqiMAAYOX2GR34M540.jpg",},
  {workId: 26, title_cn: "穿越时空的少女", cover: "https://media.nano.nagico.cn/group1/M00/00/46/CgAABGGwe_uAQlOkAAGuHnzhGNg957.jpg",},
]

const Work: React.FC<{}> = () => {

  const TypeChooseItemList = [  // 分类筛选数据
    {id: 1, name: "全部作品",},
    {id: 2, name: "热门作品",},
    {id: 3, name: "当季新番",},
    {id: 4, name: "动画电影",},
    {id: 5, name: "轻小说/游戏衍生",},
  ]

  return (
    <HomeLayout>
      <div id={style.container}>
        <TypeChoose itemList={TypeChooseItemList}/>
        <WorkTable workItemList={workTableList}/>
      </div>
    </HomeLayout>
  );
};


export default Work;
