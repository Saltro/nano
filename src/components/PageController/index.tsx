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

  for (let i = Math.max(1, currentPage - 3); i <= Math.min(totalPages, currentPage + 3); i++) {
    // 计算展示页码
    pages.push(i);
  }

  let displayFrontEllipsis = 1 >= currentPage - 3 ? 'none' : 'inline-flex'; // 显示前省略号
  let displayEndEllipsis = totalPages <= currentPage + 3 ? 'none' : 'inline-flex'; // 显示后省略号
  let displayFrontArrow = currentPage === 1 ? 'none' : 'inline-flex'; // 显示前一页箭头
  let displayEndArrow = currentPage === totalPages ? 'none' : 'inline-flex'; // 显示后一页箭头

  return (
    <div id={style.container}>
      <div className={style.pageControllerContent}>
        <div style={{ display: displayFrontArrow }} className={style.pageControllerContentButton}>
          <PageButton content="←" />
        </div>

        <div style={{ display: displayFrontEllipsis, cursor: 'auto' }} className={style.pageControllerContentButton}>
          <PageButton content="···" />
        </div>

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

        <div style={{ display: displayEndEllipsis, cursor: 'auto' }} className={style.pageControllerContentButton}>
          <PageButton content="···" />
        </div>

        <div style={{ display: displayEndArrow }} className={style.pageControllerContentButton}>
          <PageButton content="→" />
        </div>
      </div>
      <div className={style.pageControllerNum}>共 {totalPages} 页</div>
    </div>
  );
};

export default PageController;
