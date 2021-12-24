import React from 'react';
import style from './index.less';

interface IPageControllerProps {
  currentPage: number;
  totalPages: number;
  onCurrentPageChange: (page: number) => void;
}

const PageController: React.FC<IPageControllerProps> = (props) => {
  const { currentPage, totalPages, onCurrentPageChange } = props;

  if (totalPages <= 0) {
    // 没有数据
    return null;
  }

  const LEFTNUM = 3;
  const RIGHTNUM = 3;

  const hasBeginEllipsis = 1 < currentPage - LEFTNUM; // 显示前省略号
  const hasEndEllipsis = totalPages > currentPage + RIGHTNUM; // 显示后省略号
  const hasBeginArrow = currentPage !== 1; // 显示前一页箭头
  const hasEndArrow = currentPage !== totalPages; // 显示后一页箭头
  const pages: number[] = [];

  for (let i = Math.max(1, currentPage - LEFTNUM); i <= Math.min(totalPages, currentPage + RIGHTNUM); i++) {
    // 计算展示页码
    pages.push(i);
  }

  const handleCurrentPage = (page: number) => {
    onCurrentPageChange(page);
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id={style.container}>
      <div className={style.content}>
        {hasBeginArrow && (
          <div className={style.button} onClick={() => handleCurrentPage(currentPage - 1)}>
            <span role="img" aria-label="arrow-left" className="anticon anticon-arrow-left">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="arrow-left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </span>
          </div>
        )}
        {hasBeginEllipsis && (
          <>
            <div className={style.button} onClick={() => handleCurrentPage(1)}>
              <span>1</span>
            </div>
            <div style={{ cursor: 'auto' }} className={style.button}>
              <span>···</span>
            </div>
          </>
        )}
        {pages.map((page) => (
          <div
            className={page === currentPage ? style.buttonSelected : style.button}
            key={page}
            onClick={() => handleCurrentPage(page)}
          >
            <span>{page}</span>
          </div>
        ))}
        {hasEndEllipsis && (
          <div style={{ cursor: 'auto' }} className={style.button}>
            <span>···</span>
          </div>
        )}
        {hasEndArrow && (
          <div className={style.button} onClick={() => handleCurrentPage(currentPage + 1)}>
            <span role="img" aria-label="arrow-right" className="anticon anticon-arrow-right">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="arrow-right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
              </svg>
            </span>
          </div>
        )}
      </div>
      <div className={style.num}>共 {totalPages} 页</div>
    </div>
  );
};

export default PageController;
