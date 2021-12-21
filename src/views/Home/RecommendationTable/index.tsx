import React, { useEffect, useState } from 'react';
import style from './index.less';
import RecommendationItem, { IRecommendationInfo } from '@/views/Home/RecommendationTable/RecommendationItem';
import { useRecommendationContext } from '@/context/RecommendationContainer';
import Request from '@/request';

const RecommendationTable: React.FC<{}> = () => {
  const { currentPage, totalPages, setTotalPages, setCurrentPage } = useRecommendationContext();

  const [recommendationList, setRecommendationList] = useState<IRecommendationInfo[]>([]);

  const refreshRecommendationList = () => {
    console.log({ currentPage: currentPage, totalPages: totalPages });
    Request.getRecommendationList(1) // TODO: 数据不够，暂时只请求第一页
      .then((res) => {
        console.log('获取RecommendationList成功', res);
        // setTotalPages(Math.ceil(res.count / 20));
        setTotalPages(16); // TODO: 假设有好多页数据
        setRecommendationList(res.results);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.log('获取RecommendationList失败', err);
      });
  };

  useEffect(() => {
    // 初始化加载
    refreshRecommendationList();
  }, []);

  return (
    <div id={style.container}>
      {recommendationList.map((item) => {
        return <RecommendationItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default RecommendationTable;
