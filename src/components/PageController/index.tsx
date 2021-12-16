import React, { useEffect } from 'react';
import style from './index.less';
import PageButton from '@/components/PageController/PageButton';

interface IContext {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const PageController: React.FC<{ context: () => IContext }> = (props) => {
  const context = props.context();
  const LEFTNUM = 3;
  const RIGHTNUM = 3;

  const [currentPage, setCurrentPage] = React.useState(context.currentPage);

  const displayFrontEllipsis = 1 >= currentPage - LEFTNUM ? 'none' : 'inline-flex'; // 显示前省略号
  const displayEndEllipsis = context.totalPages <= currentPage + RIGHTNUM ? 'none' : 'inline-flex'; // 显示后省略号
  const displayFrontArrow = currentPage === 1 ? 'none' : 'inline-flex'; // 显示前一页箭头
  const displayEndArrow = currentPage === context.totalPages ? 'none' : 'inline-flex'; // 显示后一页箭头
  const pages = [];

  for (let i = Math.max(1, currentPage - LEFTNUM); i <= Math.min(context.totalPages, currentPage + RIGHTNUM); i++) {
    // 计算展示页码
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(context.currentPage);
  }, [context.totalPages, context.currentPage]);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    console.log(context.totalPages);
    context?.setCurrentPage(page);
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
          <PageButton>
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
          </PageButton>
        </div>

        <div
          style={{ display: displayFrontEllipsis }}
          className={style.pageControllerContentButton}
          onClick={() => handleCurrentPage(1)}
        >
          <PageButton>1</PageButton>
        </div>
        <div style={{ display: displayFrontEllipsis, cursor: 'auto' }} className={style.pageControllerContentButton}>
          <PageButton>···</PageButton>
        </div>

        {pages.map((page) => (
          <div
            className={
              page === currentPage ? style.pageControllerContentButtonSelected : style.pageControllerContentButton
            }
            key={page}
            onClick={() => handleCurrentPage(page)}
          >
            <PageButton>{page.toString()}</PageButton>
          </div>
        ))}

        <div style={{ display: displayEndEllipsis, cursor: 'auto' }} className={style.pageControllerContentButton}>
          <PageButton>···</PageButton>
        </div>

        <div
          style={{ display: displayEndArrow }}
          className={style.pageControllerContentButton}
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          <PageButton>
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
          </PageButton>
        </div>
      </div>
      <div className={style.pageControllerNum}>共 {context.totalPages} 页</div>
    </div>
  );
};

export default PageController;
