import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import Loading from '@/components/Loading';
import RecommendTable from './RecommendTable';
import style from './index.less';
import RecommendCarousel from '@/views/Home/RecommendCarousel';

const Home: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const RecommendTablePageSize = 8;
  const RecommendCarouselPageSize = 4;
  const [totalPages, setTotalPages] = React.useState(0);
  const [recommendTable, setRecommendTable] = React.useState<IRecommendInfo[]>([]);
  const [recommendCarousel, setRecommendCarousel] = React.useState<IRecommendInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 初始化加载轮播图
    Request.getRecommendPage(Number(page), RecommendCarouselPageSize, 'CAROUSEL', 'score', false)
      .then((res) => {
        const { data } = res;
        console.log('获取RecommendCarouselPage成功', data);
        setRecommendCarousel(data.results);
      })
      .catch((err) => {
        console.log('获取RecommendCarouselPage失败', err);
      });
  }, []);

  const onCurrentPageChange = (page: number) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    setIsLoading(true);
    // TODO: 数据不够，暂时只请求第一页
    Request.getRecommendPage(Number(1), RecommendTablePageSize, 'TABLE', 'score', false)
      .then((res) => {
        // setTotalPages(Math.ceil(res.count / RecommendTablePageSize));
        const { data } = res;
        console.log('获取RecommendTablePage成功', data);
        setTotalPages(16); // TODO: 假设有好多页数据
        setRecommendTable(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('获取RecommendTablePage失败', err);
      });
  }, [page]);

  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.search}>
            <SearchBox />
          </div>
        </div>
        <Loading isLoading={isLoading}>
          {page === '1' && <RecommendCarousel recommendList={recommendCarousel} />}
          <RecommendTable recommendList={recommendTable} />
          <PageController
            currentPage={page ? Number(page) : 1}
            totalPages={totalPages}
            onCurrentPageChange={onCurrentPageChange}
          />
        </Loading>
      </div>
    </HomeLayout>
  );
};

export default Home;
