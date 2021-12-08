import React from "react";
import PageButton from "@/components/PageController/PageButton";

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
    <div className="page-controller">
      <div className="page-controller-content">
        {pages.map((page) => (
          <span className={`page-controller__button ${
            page === currentPage ? "page-controller__button--active" : ""
          }`} key={page}>
          <PageButton content={page.toString()}/>
        </span>
        ))}
      </div>

      <div className="page-controller-num">
        共{totalPages}页
      </div>

    </div>
  );
};

export default PageController;
