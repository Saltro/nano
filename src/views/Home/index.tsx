import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import Loading from '@/components/Loading';
import RecommendTable from './RecommendTable';
import style from './index.less';

const Home: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);
  const [recommendList, setRecommendList] = useState<IRecommendInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onCurrentPageChange = (page: number) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    setIsLoading(true);
    Request.getRecommendationList(1) // TODO: 数据不够，暂时只请求第一页
      .then((res) => {
        console.log('获取RecommendationList成功', res);
        // setTotalPages(Math.ceil(res.count / 20));
        setTotalPages(16); // TODO: 假设有好多页数据
        setRecommendList(res.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('获取RecommendationList失败', err);
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
          <RecommendTable recommendList={recommendList} />
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
