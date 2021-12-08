import React from 'react';
import style from './index.less';
import PageButton from '@/components/PageController/PageButton';

export interface IPageController {
  currentPage: number;
  totalPages: number;
}

const PageController: React.FC<IPageController> = (props) => {
  const { currentPage, totalPages } = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div id={style.container}>
      <span className={style.pageControllerContent}>
        {pages.map((page) => (
          <span
            className={`page-controller__button ${page === currentPage ? 'page-controller__button--active' : ''}`}
            key={page}
          >
            <PageButton content={page.toString()} />
          </span>
        ))}
      </span>

      <span className={style.pageControllerNum}>共{totalPages}页</span>
    </div>
  );
};

export default PageController;
