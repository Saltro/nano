import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import RecommendationTable from './RecommendTable';
import style from './index.less';

const Home: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = React.useState(0);
  const [recommendTable, setRecommendTable] = React.useState<IRecommendInfo[]>([]);
  const [recommendCarousel, setRecommendCarousel] = React.useState<IRecommendInfo[]>([]);

  useEffect(() => {
    // 初始化加载轮播图
    Request.getRecommendPage(Number(page), 4, 'CAROUSEL', 'score', false)
      .then((res) => {
        const { data } = res;
        console.log('获取RecommendCarouselPage成功', data);
        setRecommendCarousel(data.results);
        console.log(recommendCarousel)
      })
      .catch((err) => {
        console.log('获取RecommendCarouselPage失败', err);
      });
  }, []);

  const onCurrentPageChange = (page: number) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    // TODO: 数据不够，暂时只请求第一页
    Request.getRecommendPage(Number(page), 8, 'TABLE', 'score', false)
      .then((res) => {
        // setTotalPages(Math.ceil(res.count / 20));
        const { data } = res;
        console.log('获取RecommendTablePage成功', data);
        setTotalPages(16); // TODO: 假设有好多页数据
        setRecommendTable(data.results);
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
        <div>
          <RecommendationTable recommendList={recommendTable} />
          <PageController
            currentPage={page ? Number(page) : 1}
            totalPages={totalPages}
            onCurrentPageChange={onCurrentPageChange}
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
