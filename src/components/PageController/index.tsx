import React, { useState } from 'react';
import style from './index.less';
import PageButton from '@/components/PageController/PageButton';

export interface IPageController {
  currentPage: number;
  totalPages: number;
}

const PageController: React.FC<IPageController> = (props) => {
  const LEFTNUM = 3;
  const RIGHTNUM = 3;

  const totalPages = props.totalPages;
  const [currentPage, setCurrentPage] = useState<number>(props.currentPage);
  const pages = [];

  let displayFrontEllipsis = 1 >= currentPage - LEFTNUM ? 'none' : 'inline-flex'; // 显示前省略号
  let displayEndEllipsis = totalPages <= currentPage + RIGHTNUM ? 'none' : 'inline-flex'; // 显示后省略号
  let displayFrontArrow = currentPage === 1 ? 'none' : 'inline-flex'; // 显示前一页箭头
  let displayEndArrow = currentPage === totalPages ? 'none' : 'inline-flex'; // 显示后一页箭头

  for (let i = Math.max(1, currentPage - LEFTNUM); i <= Math.min(totalPages, currentPage + RIGHTNUM); i++) {
    // 计算展示页码
    pages.push(i);
  }

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id={style.container}>
      <div className={style.pageControllerContent}>
        <div
          style={{ display: displayFrontArrow }}
          className={style.pageControllerContentButton}
          onClick={() => handleCurrentPage(currentPage - 1)}
        >
          <PageButton content="←" />
        </div>

        <div style={{ display: displayFrontEllipsis }} className={style.pageControllerContentButton}
             onClick={() => handleCurrentPage(1)}>
          <PageButton content="1" />
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
            onClick={() => handleCurrentPage(page)}
          >
            <PageButton content={page.toString()} />
          </div>
        ))}

        <div style={{ display: displayEndEllipsis, cursor: 'auto' }} className={style.pageControllerContentButton}>
          <PageButton content="···" />
        </div>

        <div
          style={{ display: displayEndArrow }}
          className={style.pageControllerContentButton}
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          <PageButton content="→" />
        </div>
      </div>
      <div className={style.pageControllerNum}>共 {totalPages} 页</div>
    </div>
  );
};

export default PageController;
