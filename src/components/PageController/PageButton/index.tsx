import React from 'react';

interface IPageButton {
  content: string;
}

const PageButton: React.FC<IPageButton> = ({ content }) => {
  return <span>{content}</span>;
};

export default PageButton;
