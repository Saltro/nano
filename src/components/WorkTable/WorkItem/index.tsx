import React from "react";
import {Link} from "react-router-dom";

export interface IWorkItem {
  workId: number;
  cover: string;
  title_cn: string;
}

const WorkItem: React.FC<IWorkItem> = (props) => {
  const { workId, cover, title_cn } = props;
  return (
    <div className="work-item">
      <Link to={`/work/${workId}`}>
        <div className="work-item-cover">
          <img src={cover} alt={title_cn} />
        </div>
        <div className="work-item-title">{title_cn}</div>
      </Link>
    </div>
  );
};

export default WorkItem;
