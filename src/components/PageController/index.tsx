import React, { useEffect } from 'react';
import style from './index.less';
import PageButton from '@/components/PageController/PageButton';
import { useWorkContext } from '@/context/WorkContainer';

const PageController: React.FC<{}> = () => {
  const workContext = useWorkContext();
  const LEFTNUM = 3;
  const RIGHTNUM = 3;

  const [currentPage, setCurrentPage] = React.useState(workContext.currentPage);

  const displayFrontEllipsis = 1 >= currentPage - LEFTNUM ? 'none' : 'inline-flex'; // 显示前省略号
  const displayEndEllipsis = workContext.totalPages <= currentPage + RIGHTNUM ? 'none' : 'inline-flex'; // 显示后省略号
  const displayFrontArrow = currentPage === 1 ? 'none' : 'inline-flex'; // 显示前一页箭头
  const displayEndArrow = currentPage === workContext.totalPages ? 'none' : 'inline-flex'; // 显示后一页箭头
  const pages = [];

  for (let i = Math.max(1, currentPage - LEFTNUM); i <= Math.min(workContext.totalPages, currentPage + RIGHTNUM); i++) {
    // 计算展示页码
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(workContext.currentPage);
  }, [workContext.totalPages, workContext.currentPage]);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    workContext?.setCurrentPage(page);
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

        <div
          style={{ display: displayFrontEllipsis }}
          className={style.pageControllerContentButton}
          onClick={() => handleCurrentPage(1)}
        >
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
      <div className={style.pageControllerNum}>共 {workContext.totalPages} 页</div>
    </div>
  );
};

export default PageController;
