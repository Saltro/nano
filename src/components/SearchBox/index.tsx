import React from 'react';

import style from './index.less';

const SearchBox: React.FC<{}> = () => {
  const [key, setKey] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      console.log(key);
    }
  };


  return (
    <div className={style.searchBox}>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="输入关键词, 回车搜索"
      />
    </div>
  );
};

export default SearchBox;
