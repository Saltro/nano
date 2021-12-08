import React from "react";

const TypeChooseItem: React.FC<{name: string}> = (name) => {
  return (
    <div className="type-choose-item">
      {name}
    </div>
  );
};

export default TypeChooseItem;
