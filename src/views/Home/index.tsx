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
  const [recommendList, setRecommendList] = React.useState<IRecommendInfo[]>([]);

  const onCurrentPageChange = (page: number) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    Request.getRecommendationList(1) // TODO: 数据不够，暂时只请求第一页
      .then((res) => {
        console.log('获取RecommendationList成功', res);
        // setTotalPages(Math.ceil(res.count / 20));
        setTotalPages(16); // TODO: 假设有好多页数据
        setRecommendList(res.results);
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
        <div>
          <RecommendationTable recommendList={recommendList} />
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
