import React from "react";

interface IPageButton {
  content: string
}

const PageButton: React.FC<IPageButton> = ({ content }) => {
  return (
    <button className="page-button">
      {content}
    </button>
  )
};

export default PageButton;
