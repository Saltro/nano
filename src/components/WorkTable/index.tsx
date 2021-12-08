import WorkItem, {IWorkItem} from "@/components/WorkTable/WorkItem";
import React from "react";

interface IWorkTable {
  workItemList: IWorkItem[];
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const {workItemList} = props;
  return (
    <div>
      {workItemList.map((item) => {
        return <WorkItem key={item.workId} {...item} />;
      })}
    </div>
  );
};

export default WorkTable;
