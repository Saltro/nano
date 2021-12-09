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
      <div className={style.pageControllerContent}>
        {pages.map((page) => (
          <div
            className={
              page === currentPage ? style.pageControllerContentButtonSelected : style.pageControllerContentButton
            }
            key={page}
          >
            <PageButton content={page.toString()} />
          </div>
        ))}
      </div>

      <div className={style.pageControllerNum}>共{totalPages}页</div>
    </div>
  );
};

export default PageController;
