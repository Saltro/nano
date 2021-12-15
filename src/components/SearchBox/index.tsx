import React, { useEffect } from 'react';
import style from './index.less';

interface IContext {
  setTypeId: (typeId: number) => void;
  searchKey: string;
  setSearchKey: (searchKey: string) => void;
}

const SearchBox: React.FC<{context: () => IContext}> = (props) => {
  const { searchKey, setSearchKey, setTypeId } = props.context();

  const [key, setKey] = React.useState(searchKey);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setSearchKey(key);
    }
  };

  useEffect(() => {
    setTypeId(-1)
  },[])

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
